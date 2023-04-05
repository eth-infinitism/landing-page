import { useEffect, useState } from 'react';
import PageHeader from '@components/PageHeader';
import React from 'react';
import { IBundlerDisplayName, IBundlersTestResults, IBundlersTestResultsWrapper, IBundlerTestResults, IDisplayBundlersPerTestResults, IDisplayBundlersOverallTestResults, IDisplaySpecificBundlerPerTestResult, IDisplaySpecificBundlerOverallTestResult } from '@components/BundlersTableInterfaces';
import BundlersOverallTestResultTable from '@components/BundlersOverallTestResultsTable';
import BundlersPerTestResultsTable from '@components/BundlersPerTestResultsTable';
import LoadingIndicator from '@components/LoadingIndicator';


const ALL_HISTORY = 'https://bundler-test-results.eip4337.com/history/history.json';
const NUMBER_OF_LATEST_TESTS_RESULTS = 10;


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

  for (const key in json) {
    const dateTime = parseDateTime(key);
    if (dateTime !== null) {
      dateTimes.push({ dateTime, key });
    }
  }

  if (dateTimes.length === 0) {
    return null;
  }

  dateTimes.sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());

  return dateTimes.slice(0, x).map(dt => dt.key);
}

function removeOldTestResults(latestTestResults: IDisplayBundlersOverallTestResults) {


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
    const bundlerDisplayName = results[Object.keys(results)[0]][bundlerName].name;
    sortedBundlerDisplayNames.push({ bundlerName, bundlerDisplayName });
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
        success: (testcase['failure'] || testcase['error']) ? false : true,
      }
      // we haven't seen this test case yet
      if (!bundlersPerTestResults[testcase.name]) {
        bundlersPerTestResults[testcase.name] = {};
      }
      bundlersPerTestResults[testcase.name][bundlerName]= specificBundlerPerTestResult;
    })
  })
  return bundlersPerTestResults;

}


const bundlers = () => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch(ALL_HISTORY)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <LoadingIndicator></LoadingIndicator>
  if (!data) return <p>No profile data</p>

  
  const bundlersNames: IBundlerDisplayName[] = sortBundlersByCount(data);
  const latestTestResults: IDisplayBundlersOverallTestResults = getLatestTestResults(data);
  const bundlersPerTestResults: IDisplayBundlersPerTestResults = getBundlersPerTestResults(data);

  return (
    <div className="mt-28 flex flex-col pb-64 gap-y-28 horizon-layout">
      <PageHeader
        name="Bundlers"
        description="A bundler is the core infrastructure component that allows account abstraction to work on any EVM network without requiring any changes to the protocol. Its purpose is to work with a new mempool of UserOperations and get the transaction included on-chain."
      />
      <BundlersOverallTestResultTable bundlersNames={bundlersNames} latestResults={latestTestResults} />
      <BundlersPerTestResultsTable bundlersNames={bundlersNames} bundlersPerTestResults={bundlersPerTestResults} />;      
    </div>
  );
};

export default bundlers;
