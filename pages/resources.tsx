import React from 'react';
import ResourceBlock from '@components/ResourceBlock';
import { Articles } from '@configs/resources/article';
import { Tutorials } from '@configs/resources/tutorial';
import { Tools } from '@configs/resources/tool';
import PageHeader from '@components/PageHeader';

const resources = () => {
  return (
    <div className="mt-28 flex flex-col pb-64 gap-y-28 horizon-layout">
      <PageHeader
        name="Resources"
        description="A curated list of resources dedicated to Account Abstraction. list lots of useful resources (videos, tutorials, tools, etc.)"
      />

      <ResourceBlock label="Articles" sections={Articles} />

      <ResourceBlock label="Tutorials" sections={Tutorials} />

      <ResourceBlock label="Tutorials" sections={Tools} />
    </div>
  );
};

export default resources;
