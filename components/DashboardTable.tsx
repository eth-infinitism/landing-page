import React, { ReactNode } from 'react';

interface ITestCase {
  classname: string;
  name: string;
  time: string;
  skipped?: any;
}
export interface IBundlerTestResult {
  name: string;
  errors: string;
  failures: string;
  skipped: string;
  tests: string;
  time: string;
  timestamp: string;
  hostname: string;
  testcase: ITestCase[];
}

type IColumnKey = keyof Omit<IBundlerTestResult, 'testcase'>;

interface IProps {
  name: string | ReactNode;
  columnKey: IColumnKey;
  data: IBundlerTestResult[];
  cellRender?: (rowData: IBundlerTestResult) => ReactNode;
}

const Table = ({ name, columnKey, data, cellRender }: IProps) => {
  const columns = data?.map(row => row[columnKey]); // memo?

  return (
    <table className="border-spacing-0">
      <caption className="font-bold text-xl border-l-4 border-black pl-3 text-left mb-12">{name}</caption>
      <thead>
        <tr>
          <th></th>
          {columns?.map(column => (
            <th scope="col" className="table-cell align-middle">
              <div className="ml-5 leading-[6rem] h-24 bg-black rounded-t-2xl text-white">{column}</div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data?.map(row => {
          return (
            <tr className="min-h-11 border-b border-black">
              <td scope="row">{row.time}</td>
              {columns?.map((column, idx) => {
                const rowData = data.filter(row => row.name === column)?.[0];
                return (
                  <td className="pl-5 text-center">
                    <div className={`min-h-11 leading-[2.75rem] w-full flex flex-row items-center justify-center ${idx === 0 ? 'bg-table-gray' : ''}`}>
                      {cellRender ? cellRender(rowData) : '-'}
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
