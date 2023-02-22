import { IPartnerItem, PartnerItems } from '@configs/home/partner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PartnerItem = ({ logo, link }: IPartnerItem) => (
  <Link href={link}>
    <Image src={logo} alt="logo" width={237} height={76} className="shadow-sm" />
  </Link>
);

const Partner = () => (
  <section className="w-full text-center relative">
    <div className="absolute -left-44 -top-1/2 w-[2000px] h-96  -z-10 bg-pink -skew-y-6" />
    <div className="absolute -left-44 -top-1/2 w-[2000px] h-[1500px]  -z-20 bg-green skew-y-6 overflow-visible" />
    <h1 className="title">Our ecosystem Partners</h1>
    <div className="w-full flex flex-row justify-evenly mt-20">
      {PartnerItems.map(item => (
        <PartnerItem {...item} />
      ))}
    </div>
  </section>
);
export default Partner;
