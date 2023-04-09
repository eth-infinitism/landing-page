import { IPartnerItem, PartnerItems } from '@configs/home/partner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PartnerItem = ({ logo, link }: IPartnerItem) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">    
      <Image src={logo} alt="logo" width={100} height={100} className="drop-shadow-lg" />
  </Link>
);

const Partner = () => (
  <section className="w-full text-center relative">
    <div className="absolute -left-44 -top-1/2 w-[2000px] h-96  -z-10 bg-pink -skew-y-6" />
    <div className="absolute -left-44 -top-1/2 w-[2000px] h-[1500px]  -z-20 bg-green skew-y-6 overflow-visible" />

    <h1 className="title">Members of the 4337 Revolution</h1>
    <div className="mx-auto w-2/3 flex flex-wrap gap-y-12 gap-x-12 flex-row justify-evenly mt-20">
      {PartnerItems.map(item => (
        <PartnerItem key={item.link} {...item} />
      ))}
    </div>
  </section>
);
export default Partner;
