import React from 'react';

interface IProps {
  name: string;
  descriptions: React.ReactNode[];
}

const PageHeader = ({ name, descriptions }: IProps) => {
  return (
    <section>
      <h1 className="font-bold text-3xl">{name}</h1>
      {descriptions.map((desc, index) => (
        <p key={index} className="text-base mt-3 max-w-3xl">
          {desc}
        </p>
      ))}
    </section>
  );
};

export default PageHeader;
