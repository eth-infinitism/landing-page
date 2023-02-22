import PageHeader from '@components/PageHeader';
import ResourceBlock from '@components/ResourceBlock';
import Table from '@components/Table';
import { bundlerResources } from '@configs/bunlders';
import React from 'react';

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
            <br /> results dashboard
          </>
        }
      />

      <Table name="Per-test result of latest run" />
    </div>
  );
};

export default bundlers;
