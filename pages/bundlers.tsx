import PageHeader from '@components/PageHeader';
import ResourceBlock from '@components/ResourceBlock';
import Table, { IBundlerTestResult } from '@components/DashboardTable';
import { bundlerResources } from '@configs/bundlers';
import React from 'react';
import pass_icon from '@assets/icons/pass.svg';
import fail_icon from '@assets/icons/fail.svg';
import Image from 'next/image';

const mockData: IBundlerTestResult[] = [
  {
    name: 'AA Reference Bundler/0.4.0',
    errors: '2',
    failures: '0',
    skipped: '1',
    tests: '4',
    time: '12.224123',
    timestamp: '2023-02-09T20:45:59.604898',
    hostname: 'fv-az567-272',
    testcase: [
      {
        classname: '',
        name: 'tests.bundle.test_stake_rules',
        time: '0.000',
        skipped: {
          message: 'collection skipped',
          '#text':
            "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')",
        },
      },
      {
        classname: 'tests.opbanning.test_op_banning',
        name: 'test_account_banned_opcode[GASPRICE]',
        time: '0.205',
      },
      {
        classname: 'tests.opbanning.test_op_banning',
        name: 'test_paymaster_banned_opcode[GASPRICE]',
        time: '0.252',
      },
      {
        classname: 'tests.opbanning.test_op_banning',
        name: 'test_factory_banned_opcode[GASPRICE]',
        time: '0.388',
      },
    ],
  },
  {
    name: 'Bundler/0.4.0',
    errors: '1',
    failures: '0',
    skipped: '1',
    tests: '43',
    time: '12.224567',
    timestamp: '2023-02-09T20:45:59.604898',
    hostname: 'fv-az567-272',
    testcase: [
      {
        classname: '',
        name: 'tests.bundle.test_stake_rules',
        time: '0.000',
        skipped: {
          message: 'collection skipped',
          '#text':
            "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')",
        },
      },
    ],
  },
  {
    name: 'stackup/0.1',
    errors: '0',
    failures: '0',
    skipped: '0',
    tests: '102',
    time: '12.224567',
    timestamp: '2023-02-09T20:45:59.604898',
    hostname: 'fv-az567-272',
    testcase: [
      {
        classname: '',
        name: 'tests.bundle.test_stake_rules',
        time: '0.000',
        skipped: {
          message: 'collection skipped',
          '#text':
            "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')",
        },
      },
    ],
  },
];

const bundlers = () => {
  return (
    <div className="mt-28 px-20 flex flex-col pb-64 gap-y-28">
      <PageHeader
        name="Bundlers"
        description="Provide an in-depth explanation of bundlers, which batch multiple UserOps into a single transaction. The page
          will include examples and use cases for bundlers, as well as information on how to implement them in projects."
      />

      <div className="bg-[#FFFBF3] -mx-20 px-20 py-10">
        <ResourceBlock label="TODO: mock name" sections={bundlerResources} />
      </div>

      <Table
        name={
          <>
            Bundler CTS (Compatibility Test Suite)
            <br />
            results dashboard
          </>
        }
        columnKey={'name'}
        data={mockData}
        cellRender={({ errors, tests }: IBundlerTestResult) => (
          <>
            {tests} / <span className={`${Number(errors) === 0 ? 'text-lime-500' : 'text-red-500'}`}>{errors}</span>
          </>
        )}
      />

      <Table
        name="Per-test result of latest run"
        data={mockData}
        columnKey="name"
        cellRender={({ skipped, failures, errors }) => (
          <Image
            src={skipped === '0' && failures === '0' && errors === '0' ? pass_icon : fail_icon}
            alt=""
            className="py-8"
          />
        )}
      />
    </div>
  );
};

export default bundlers;
