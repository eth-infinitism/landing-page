import { useEffect, useState } from 'react';
import PageHeader from '@components/PageHeader';
import React from 'react';
import ResourceBlock from '@components/ResourceBlock';
import { bundlerResources } from '@configs/bundlers';
import { ITestCase, IBundlerDisplayName, IBundlersTestResults, IBundlersTestResultsWrapper, IBundlerTestResults, IDisplayBundlersPerTestResults, IDisplayBundlersOverallTestResults, IDisplaySpecificBundlerPerTestResult, IDisplaySpecificBundlerOverallTestResult } from '@components/BundlersTableInterfaces';
import BundlersOverallTestResultTable from '@components/BundlersOverallTestResultsTable';
import BundlersPerTestResultsTable from '@components/BundlersPerTestResultsTable';
import LoadingIndicator from '@components/LoadingIndicator';
import ErrorMessage from '@components/ErrorMessage';




const TEST_RESULTS_BASE_URL = `https://bundler-test-results.erc4337.io/`
const NUMBER_OF_LATEST_TESTS_RESULTS = 10;

const mapBundlerNames: { [key: string]: string } = {
  'aabundler-launcher': 'aabundler',
  'stackup-bundler-launcher': 'stackup',
  'aa-bundler-rust-launcher': 'silius',
  'skandha-launcher': 'skandha',
  'voltaire-bundler-launcher': 'voltaire'

};




type BundlerDataType = { [data: string]: { [bundler: string]: any } }

function mapBundlerName(name: string): string {
  return name == 'aa-bundler-rust-launcher' ? 'silius' :
    name.
      replace('-bundler', '').
      replace('-launcher', '')
}

function remapBundlerNames(data: BundlerDataType): BundlerDataType {
  var ret: BundlerDataType = {}

  function entriesToObject(e: [string, any][]): any {
    return e.reduce((set, val) => ({ ...set, [val[0]]: val[1] }), {})
  }

  for (const date of Object.keys(data)) {
    ret[date] = entriesToObject(
      Object.entries(data[date])
        .map(([k, v]) => [mapBundlerName(k), v])
    )
  }
  return ret
}


export function parseDateTime(dateTimeString: string): Date {
  // Check if the input string has the correct length
  if (dateTimeString.length !== 15) {
    throw Error("invlid date input string");
  }

  // Extract the year, month, day, hour, minute, and second from the input string
  const year = Number(dateTimeString.slice(0, 4));
  const month = Number(dateTimeString.slice(4, 6)) - 1; // JavaScript Date months are zero-indexed
  const day = Number(dateTimeString.slice(6, 8));
  const hour = Number(dateTimeString.slice(9, 11));
  const minute = Number(dateTimeString.slice(11, 13));
  const second = Number(dateTimeString.slice(13));

  // Create a new Date object with the extracted values
  const dateTime = new Date(year, month, day, hour, minute, second);

  // Check if the Date object is valid (i.e. the input string had valid values)
  if (isNaN(dateTime.getTime())) {
    throw Error("invlid date input string");
  }

  return dateTime;
}

function findLatestDateTimes(json: { [key: string]: any }, x: number): string[] | null {
  const dateTimes: { dateTime: Date, key: string }[] = [];
  const mostRecentByDate: Map<string, { dateTime: Date, key: string }> = new Map();

  for (const key in json) {
    const dateTime = parseDateTime(key);
    if (dateTime !== null) {
      // Extract the date part only
      const dateOnly = dateTime.toISOString().split('T')[0];
      const existingEntry = mostRecentByDate.get(dateOnly);
      
      // Update the map if it's the first entry for this date or a more recent time on the same day
      if (!existingEntry || existingEntry.dateTime < dateTime) {
        mostRecentByDate.set(dateOnly, { dateTime, key });
      }
    }
  }

  if (mostRecentByDate.size === 0) {
    return null;
  }

  // Create an array from the map values and sort it by date in descending order
  const sortedDateTimes = Array.from(mostRecentByDate.values());
  sortedDateTimes.sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());

  // Return only the required number of most recent entries
  return sortedDateTimes.slice(0, x).map(dt => dt.key);
}


function getLatestTestResults(data: IBundlersTestResults): IDisplayBundlersOverallTestResults {
  const latestDates: string[] | null = findLatestDateTimes(data, NUMBER_OF_LATEST_TESTS_RESULTS);
  if (!latestDates) {
    throw Error("can't find latest test results");
  }
  const latestTestResults: IDisplayBundlersOverallTestResults = {};
  latestDates.forEach((latestDate) => {
    const dateTimeOfLatestTest = parseDateTime(latestDate);
    if (!dateTimeOfLatestTest) throw Error("invalid date time");
    if (dateTimeOfLatestTest < parseDateTime('20230223/192624')) return // first trial tests, lots of meaningless errors
    const latestTest = data[latestDate];
    Object.keys(latestTest).forEach(bundlerName => {
      const latestTestResult: IDisplaySpecificBundlerOverallTestResult = {
        name: latestTest[bundlerName].name,
        totalTests: parseInt(latestTest[bundlerName].tests),
        totalErrors: parseInt(latestTest[bundlerName].errors) + parseInt(latestTest[bundlerName].failures), // we treat skipped as successful tests

      }
      if (!latestTestResults[latestDate]) latestTestResults[latestDate] = {};
      latestTestResults[latestDate][bundlerName] = latestTestResult;
    })
  });
  return latestTestResults;
}

function countBundlerNames(results: IBundlersTestResults): Record<string, number> {
  const bundlerCounts: Record<string, number> = {};

  // Iterate over the datetime entries
  for (const dateTime in results) {
    const wrappers = results[dateTime];

    // Iterate over the bundler name entries in the current datetime entry
    for (const bundlerName in wrappers) {
      // Increment the count for the current bundler name, or initialize it to 1 if it hasn't appeared before
      bundlerCounts[bundlerName] = (bundlerCounts[bundlerName] || 0) + 1;
    }
  }

  return bundlerCounts;
}

function getTestResultsEnum(testcase: ITestCase) {
  if (testcase['failure'] || testcase['error']) return 'error';
  if (testcase['skipped']) return 'skipped';
  return 'success';
}

function sortBundlersByCount(results: IBundlersTestResults): IBundlerDisplayName[] {
  const bundlerCounts: Record<string, number> = countBundlerNames(results);

  // Convert the bundlerCounts object into an array of [bundlerName, count] pairs
  const bundlerCountsArray = Object.entries(bundlerCounts);

  // Sort the array by count, with the highest count first
  bundlerCountsArray.sort((a, b) => b[1] - a[1]);

  // Extract just the bundler names from the sorted array
  const sortedBundlerNames = bundlerCountsArray.map(([bundlerName, _]) => bundlerName);

  // Create an array of IBundlerDisplayName objects sorted by count
  const sortedBundlerDisplayNames: IBundlerDisplayName[] = [];
  for (const bundlerName of sortedBundlerNames) {
    const bundlerDisplayName = results[Object.keys(results)[0]][bundlerName]?.name?.replace(/^(.)/, ch => ch.toUpperCase());
    sortedBundlerDisplayNames.push({ bundlerName, bundlerDisplayName: bundlerDisplayName ?? bundlerName });
  }

  return sortedBundlerDisplayNames;
}

function getBundlersPerTestResults(data: IBundlersTestResults): IDisplayBundlersPerTestResults {
  const bundlersPerTestResults: IDisplayBundlersPerTestResults = {};
  const latestDate: string[] | null = findLatestDateTimes(data, 1);
  if (!latestDate) {
    throw Error("can't find latest test results");
  }
  const latestPerTestResultForAllBundlers: IBundlersTestResultsWrapper = data[latestDate[0]];

  Object.keys(latestPerTestResultForAllBundlers).forEach(bundlerName => {
    const bundlerTestResults: IBundlerTestResults = latestPerTestResultForAllBundlers[bundlerName];
    Object.keys(bundlerTestResults.testcase).forEach((testcaseKey: string) => {
      const testcase = bundlerTestResults.testcase[testcaseKey];
      const specificBundlerPerTestResult: IDisplaySpecificBundlerPerTestResult = {
        result: getTestResultsEnum(testcase),
      }
      // we haven't seen this test case yet
      if (!bundlersPerTestResults[testcase.name]) {
        bundlersPerTestResults[testcase.name] = {};
      }
      bundlersPerTestResults[testcase.name][bundlerName] = specificBundlerPerTestResult;
    })
  })
  return bundlersPerTestResults;

}


const bundlers = () => {
  // Get the initial value of the 'v' parameter from the URL
  const getInitialBundlerVersion = () => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search).get('v') || '07';
    }
    return '';
  };

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [bundlerVersion, setBundlerVersion] = useState(getInitialBundlerVersion);
  const [showError, setShowError] = useState(false);



  const setUrlParam = (key: string, value: string) => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set(key, value);
      window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
      setBundlerVersion(value);
    }
  };

  function buildGetHistoryURL() {
    console.log(`bundlerVersion`, bundlerVersion);
    return `${TEST_RESULTS_BASE_URL}v${bundlerVersion}/history/history.json`;
  }

  const fetchAndPopulateBundlerTestResults = () => {
    setLoading(true)
    fetch(buildGetHistoryURL())
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((data) => {
        setData(remapBundlerNames(data) as any)
        setLoading(false)
      })
      .catch((error) => {
        setShowError(true);
        setLoading(false)
      })
  }

  useEffect(fetchAndPopulateBundlerTestResults, [bundlerVersion])

  if (isLoading) return <LoadingIndicator></LoadingIndicator>
  if (!data) return <ErrorMessage showError={showError} message="Invalid bundler version" />


  const bundlersNames: IBundlerDisplayName[] = sortBundlersByCount(data);
  const latestTestResults: IDisplayBundlersOverallTestResults = getLatestTestResults(data);
  const bundlersPerTestResults: IDisplayBundlersPerTestResults = getBundlersPerTestResults(data);

  return (
    <div className="mt-28 flex flex-col pb-64 gap-y-12 horizon-layout">
      <PageHeader
        name='Bundler CTS (Compatibility Test Suite) results dashboard'
        descriptions={[
          'A bundler is the core infrastructure component that allows account abstraction to work on any EVM network without requiring any changes to the protocol. Its purpose is to work with a new mempool of UserOperations and get the transaction included on-chain.',
          'This page presents an overview of the test coverage results of all open source bundlers in the ecosystem. Useful information about the test suite, bundler specs and more can be found in the section at the bottom.',
          <span>Published your own open source bundler? To add your bundler to the list, please submit a PR to <a href="https://github.com/eth-infinitism/bundler-test-executor" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">https://github.com/eth-infinitism/bundler-test-executor</a></span>
        ]}
      />

      <>
        {(bundlerVersion != '07') && (
          <div>
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 flex items-center" role="alert">
            <span className="text-xl mr-2">💡</span>
            <div className="pl-3 text-left">
              <h1 className="font-bold text-xl">
                Showing results for legacy bundler version (0.6)
              </h1>
              <a
                href="#"
                className="block text-sm max-w-fit mt-2 text-blue-600 visited:text-purple-600 hover:underline hover:decoration-2 hover:text-800"
                onClick={(event) => {
                  event.preventDefault();
                  setUrlParam('v', '07');
                }}
              >
                See latest results
              </a>
            </div>
          </div>
        </div>
        
        )}
      </>
      <>
        {(bundlerVersion == '07') && (
          <div>
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 flex items-center" role="alert">
            <span className="text-xl mr-2">💡</span>
            <div className="pl-3 text-left">
              <h1 className="font-bold text-xl">
                Showing results for latest bundler version (0.7)
              </h1>
              <a
                href="#"
                className="block text-sm max-w-fit mt-2 text-blue-600 visited:text-purple-600 hover:underline hover:decoration-2 hover:text-800"
                onClick={(event) => {
                  event.preventDefault();
                  setUrlParam('v', '06');
                }}
              >
                See legacy results (v0.6)
              </a>
            </div>
          </div>
        </div>
        
        )}
      </>
      <BundlersOverallTestResultTable bundlersNames={bundlersNames} latestResults={latestTestResults} />
      <BundlersPerTestResultsTable bundlersNames={bundlersNames} bundlersPerTestResults={bundlersPerTestResults} />
      <div className="bg-[#FFFBF3] -mx-20 px-20 py-10">
        <ResourceBlock label="Resources" sections={bundlerResources} />
      </div>
    </div>
  );
};

export default bundlers;
