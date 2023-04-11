import React from 'react';

interface IProps {
  name: string;
  description: string;
  moreDescription?: string;
}

const PageHeader = ({ name, description, moreDescription }: IProps) => {
  return (
    <section>
      <h1 className="font-bold text-3xl">{name}</h1>
      <p className="text-base mt-3 max-w-3xl">{description}</p>
      {moreDescription && (
        <p className="text-base mt-3 max-w-3xl">{moreDescription}</p>
      )}
    </section>
  );
};

export default PageHeader;
