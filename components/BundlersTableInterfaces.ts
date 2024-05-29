/**
 *  Raw data interfaces
 */
export interface ITestCase {
  classname: string;
  name: string;
  time: string;
  skipped?: any;
  error?: any;
  failure?: any;
}

interface ITestCaseWrapper {
  [testcaseKey: string]: ITestCase;
}
export interface IBundlerTestResults {
  name: string;
  errors: string;
  failures: string;
  skipped: string;
  tests: string;
  time: string;
  timestamp: string;
  hostname: string;
  testcase: ITestCaseWrapper;
}

export interface IBundlersTestResultsWrapper {
  [bundlerName: string]: IBundlerTestResults;
}

export interface IBundlersTestResults {
  [datetime: string]: IBundlersTestResultsWrapper
}

/**
 * Display interface for latest metrics per bundler
 */

export interface IDisplaySpecificBundlerOverallTestResult {
  name: string,
  totalTests: number,
  totalErrors: number,
}

export interface IDisplayBundlersOverallTestResult {
  [bundlerName: string]: IDisplaySpecificBundlerOverallTestResult
}

export interface IDisplayBundlersOverallTestResults {
  [datetime: string]: IDisplayBundlersOverallTestResult;
}


/**
 * Bundler name interface
 */

export interface IBundlerDisplayName {
  bundlerName: string,
  bundlerDisplayName: string,
}

/**
 * Display interfaces for showing how each bundler performed on each test
 */

export interface IDisplaySpecificBundlerPerTestResult {
  result: string,
}

export interface IDisplayBundlerPerTestResult {
  [bundlerName: string]: IDisplaySpecificBundlerPerTestResult
}
export interface IDisplayBundlersPerTestResults {
  [testName: string]: IDisplayBundlerPerTestResult
}