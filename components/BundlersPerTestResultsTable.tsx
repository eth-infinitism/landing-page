import React from 'react';
import { IBundlerDisplayName, IDisplayBundlersPerTestResults } from './BundlersTableInterfaces';


interface IProps {
  bundlersNames: IBundlerDisplayName[];
  bundlersPerTestResults: IDisplayBundlersPerTestResults;
}

const BundlersPerTestResultsTable: React.FC<IProps> = ({
  bundlersNames: bundlerDisplayNames,
  bundlersPerTestResults,
}) => {
  return (
    <table className="border-spacing-0">
      <caption className="font-bold text-xl border-l-4 border-black pl-3 text-left mb-12">
      Per-test result of latest run
      </caption>
      <thead>
        <tr>
          <th className="min-h-11 w-1/3 table-cell align-middle">
            <div className="ml-5 leading-[6rem] h-24 border-t border-l border-r border-b-8 border-black rounded-t-2xl">Test Name</div>
          </th>
          {bundlerDisplayNames.map((displayName) => (
            <th key={displayName.bundlerName}>
              <div className="ml-5 leading-[6rem] h-24 bg-black rounded-t-2xl text-white">
                {displayName.bundlerDisplayName}
              </div>
              </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(bundlersPerTestResults).map(([testName, bundlerPerTestResult]) => (
          <tr className="min-h-11 w-1/3 border-b border-black" key={testName}>
            <td className="pl-5 w-1/3 text-center">{testName}</td>
            {bundlerDisplayNames.map((displayName) => (
              <td className="pl-5 text-center" key={displayName.bundlerName}>
                <div className={`min-h-11 leading-[2.75rem] w-full flex flex-row items-center justify-center`}>
                {bundlerPerTestResult[displayName.bundlerName]?.success ? '✅' : '❌'}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BundlersPerTestResultsTable;
