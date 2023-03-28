import { IResourceSection } from '@configs/type';
import Link from 'next/link';
import React from 'react';

interface IProps {
  label: string;
  sections: IResourceSection[];
}

const ResourceSection = ({ sectionName, resources }: IResourceSection) => (
  <div>
    <h2 className="font-bold text-base mb-3">{sectionName}</h2>
    <ul>
      {resources.map(({ name, url }) => (
        <Link href={url} target="_blank" className="max-w-fit list-item list-disc ml-5 no-underline text-blue-600 visited:text-purple-600 hover:underline hover:decoration-2 hover:text-800">
          {name}
        </Link>
      ))}
    </ul>
  </div>
);

const ResourceBlock = ({ label, sections }: IProps) => {
  return (
    <section>
      <h1 className="font-bold text-xl w-full text-left border-b border-black mb-5 ">{label}</h1>
      <div className="flex flex-col gap-y-3">
        {sections.map(item => (
          <ResourceSection {...item} />
        ))}
      </div>
    </section>
  );
};

export default ResourceBlock;
