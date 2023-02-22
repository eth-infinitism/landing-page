import React from 'react';

interface IProps {
  name: string;
  description: string;
}

const PageHeader = ({ name, description }: IProps) => {
  return (
    <section>
      <h1 className="font-bold text-3xl">{name}</h1>
      <p className="text-base mt-3 max-w-3xl">{description}</p>
    </section>
  );
};

export default PageHeader;
