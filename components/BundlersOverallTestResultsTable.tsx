import { parseDateTime } from '@pages/bundlers';
import React, { ReactNode } from 'react';
import { IBundlerDisplayName, IDisplayBundlersOverallTestResults } from './BundlersTableInterfaces';


interface IProps {
  bundlersNames: IBundlerDisplayName[];
  latestResults: IDisplayBundlersOverallTestResults;
}

const BundlersOverallTestResultTable: React.FC<IProps> = ({ bundlersNames, latestResults }) => {
  const columns = bundlersNames.map((bundlerName: IBundlerDisplayName) => (
    <th key={bundlerName.bundlerName}>
      <div className="ml-5 leading-[6rem] h-24 bg-black rounded-t-2xl text-white">{bundlerName.bundlerDisplayName}</div>
    </th>
  ));
  const rows = Object.entries(latestResults).map(([datetime, results]) => {
    const cells = bundlersNames.map((bundlerName) => {
      const bundlerResult = results[bundlerName.bundlerName];
      if (bundlerResult) {
        return <td className="pl-5 text-center" key={bundlerName.bundlerName}>
          <div className={`min-h-11 leading-[2.75rem] w-full flex flex-row items-center justify-center ${Number(bundlerResult.totalErrors) > 0 ? (Number(bundlerResult.totalErrors) < 5 ? 'text-yellow-500' :  'text-red-500') : 'text-lime-500'}`}>
          {bundlerResult.totalErrors} / {bundlerResult.totalTests}
          </div>
          </td>;
      } else {
        return <td className="pl-5 text-center" key={bundlerName.bundlerName}>
          <div className={`min-h-11 leading-[2.75rem] w-full flex flex-row items-center justify-center`}>
          N/A
          </div>
          </td>;
      }
    });

    return (
      <tr className="min-h-11 w-1/3 border-b border-black" key={datetime}>
        <th>{parseDateTime(datetime).toLocaleDateString()}, {parseDateTime(datetime).toLocaleTimeString()}</th>
        {cells}
      </tr>
    );
  });

  return (
    <table className="border-spacing-0">
      <caption className="font-bold text-xl border-l-4 border-black pl-3 text-left mb-6">
        Bundler CTS (Compatibility Test Suite)
        <br />
        results dashboard
      </caption>
      <caption className="font-bold text-m border-black pl-3 text-left mb-12">
        An historical overview of all ERC-4337 bundlers - how many errors does each bundler throw every time the official tests suite has been run
      </caption>
      <thead>
        <tr>
        <th className="min-h-11 w-1/3 table-cell align-middle">
        <div className="ml-5 leading-[6rem] h-24 border-t border-l border-r border-b-8 border-black rounded-t-2xl">Test Date</div>
          </th>
          
          {columns}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default BundlersOverallTestResultTable;
