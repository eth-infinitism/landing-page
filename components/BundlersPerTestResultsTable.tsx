import React from 'react';
import { IBundlerDisplayName, IDisplayBundlersPerTestResults } from './BundlersTableInterfaces';

interface IProps {
  bundlersNames: IBundlerDisplayName[];
  bundlersPerTestResults: IDisplayBundlersPerTestResults;
}

function getTestResultDisplauEmoji(result: string): string{
  switch(result) {
    case 'error': return '❌';
    case 'skipped': return '➖';
    case 'success': return '✅';
    default: return 'N/A';
  }

}

const BundlersPerTestResultsTable: React.FC<IProps> = ({
  bundlersNames: bundlerDisplayNames,
  bundlersPerTestResults,
}) => {
  return (
    <div>
      <h1 className="font-bold text-xl border-l-4 border-black pl-3 text-left mb-4">
        Per-test result of latest run
      </h1>
      <h2 className="font-light text-xs mb-12">
        ( ✅ success ; ❌ error ; ➖ skipped )
      </h2>
      <div className='overflow-x-scroll'>
        <table className="border-spacing-0 w-full">
          <thead>
            <tr>
              <th className="table-cell align-middle">Test Name</th>
              {bundlerDisplayNames.map(displayName => (
                <th key={displayName.bundlerName}>
                  <div className="ml-5 leading-[4rem] h-16 bg-black rounded-t-2xl text-white min-w-max px-4">
                    {displayName.bundlerDisplayName}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(bundlersPerTestResults).map(([testName, bundlerPerTestResult]) => (
              <tr className="min-h-11 border-b border-black" key={testName}>
                <td className="pl-5 text-center">{testName}</td>
                {bundlerDisplayNames.map(displayName => (
                  <td className="pl-5 text-center" key={displayName.bundlerName}>
                    <div className={`leading-[2rem] w-full flex flex-row items-center justify-center`}>
                      {getTestResultDisplauEmoji(bundlerPerTestResult[displayName.bundlerName]?.result)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BundlersPerTestResultsTable;
