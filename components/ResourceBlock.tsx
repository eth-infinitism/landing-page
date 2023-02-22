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
        <Link href={url} className="list-item list-disc ml-5">
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
