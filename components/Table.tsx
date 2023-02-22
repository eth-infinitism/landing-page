import React, { ReactNode } from 'react';

interface IProps {
  name: string | ReactNode;
}

const Table = ({ name }: IProps) => {
  return (
    <div>
      <h1 className="font-bold text-xl border-l-4 border-black pl-3">{name}</h1>
    </div>
  );
};

export default Table;
