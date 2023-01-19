import { SectionIDs } from '@utils/constants';
import Link from 'next/link';
import React from 'react';

export default function Brand() {
  const handleClickStart = () => {
    // TODO: jump
  };

  return (
    <div id={SectionIDs.brand} className="flex flex-col items-center justify-center py-3 mt-32">
      <span className="gradient-title text-center">ERC-4337</span>
      <span className="text-white text-lg mt-[27px] mb-[49px] w-[568px]">
        Lorem ipsum dolor sit amet consectetur. Metus et commodo pellentesque{' '}
      </span>
      <Link
        className="flex h-[40px] w-[170px] rounded-3xl bg-green hover:bg-[#57f0d4]"
        onClick={handleClickStart}
        href={'#tutorial'}>
        <span className="text-grey text-xs font-bold text-center self-center  w-full">Getting Started</span>
      </Link>
    </div>
  );
}
