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
          <th className="table-cell align-middle">Test Name</th>
          {bundlerDisplayNames.map((displayName) => (
            <th key={displayName.bundlerName}>
              <div className="ml-5 leading-[6rem] h-24 bg-black rounded-t-2xl text-white">{displayName.bundlerDisplayName}</div>
              </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(bundlersPerTestResults).map(([testName, bundlerPerTestResult]) => (
          <tr className="min-h-11 border-b border-black" key={testName}>
            <td className="pl-5 text-center">{testName}</td>
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


// const BundlersPerTestResultsTable: React.FC<IProps> = ({ bundlersNames: bundlerDisplayNames, bundlersPerTestResults }) => {
//   const columns = bundlerDisplayNames.map((bundlerName: IBundlerDisplayName) => (
//     <th key={bundlerName.bundlerName} className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//       {bundlerName.bundlerDisplayName}
//     </th>
//   ));

//   const rows = Object.entries(bundlersPerTestResults).map(([testName, bundlerResults]) => {
//     const cells = bundlerDisplayNames.map((bundlerName) => {
//       const bundlerResult = bundlerResults[bundlerName.bundlerName];
//       if (bundlerResult) {
//         return (
//           <td key={bundlerName.bundlerName} className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
//             {bundlerResult.success ? "✅" : "❌"}
//           </td>
//         );
//       } else {
//         return (
//           <td key={bundlerName.bundlerName} className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
//             N/A
//           </td>
//         );
//       }
//     });

//     return (
//       <tr key={testName}>
//         <td className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-900">
//           {testName}
//         </td>
//         {cells}
//       </tr>
//     );
//   });

//   return (
//     <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>{columns}</tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
//       </table>
//     </div>
//   );
// };

export default BundlersPerTestResultsTable;
