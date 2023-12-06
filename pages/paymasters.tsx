import PageHeader from '@components/PageHeader';
import React from 'react';

const paymasters = () => {
  return (
    <div className="mt-28 flex flex-col pb-64 gap-y-28 horizon-layout">
      <PageHeader
        name='Paymasters'
        descriptions={['This page will include information on how paymasters work, as well as instructions on how to implement them in projects.']}
      />

      <div className="-mx-20 px-20 bg-[#F6FFF3] py-28 font-bold text-xl text-center">coming soon...</div>
    </div>
  );
};

export default paymasters;
