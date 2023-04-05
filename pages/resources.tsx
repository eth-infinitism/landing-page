import React from 'react';
import ResourceBlock from '@components/ResourceBlock';
import { Articles } from '@configs/resources/article';
import { Tutorials } from '@configs/resources/tutorial';
import { Code } from '@configs/resources/code';
import PageHeader from '@components/PageHeader';

const resources = () => {
  return (
    <div className="mt-28 flex flex-col pb-64 gap-y-28 horizon-layout">
      <PageHeader
        name="Resources"
        description="A curated list of resources dedicated to Account Abstraction. list lots of useful resources (videos, tutorials, tools, etc.)"
      />

      <ResourceBlock label="Code" sections={Code} />
      
      <ResourceBlock label="Articles" sections={Articles} />

      <ResourceBlock label="Tutorials" sections={Tutorials} />

      
    </div>
  );
};

export default resources;
