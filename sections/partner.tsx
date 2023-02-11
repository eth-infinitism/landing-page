import { IPartnerItem, PartnerItems } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import red_blur from '@assets/red_blur.png';

const PartnerItem = ({ logo, link }: IPartnerItem) => (
  <Link href={link}>
    <Image src={logo} alt="logo" width={237} height={76} className="shadow-sm" />
  </Link>
);

const Partner = () => (
  <div className="w-full text-center relative">
    <Image src={red_blur} alt="" className="absolute -z-10 bottom-0 -right-52" />
    <h1 className="title">Our ecosystem Partners</h1>
    <div className="w-full flex flex-row justify-evenly mt-20">
      {PartnerItems.map(item => (
        <PartnerItem {...item} />
      ))}
    </div>
  </div>
);
export default Partner;
