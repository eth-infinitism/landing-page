import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { INavigationItem, NavigationItems } from '@utils/constants';
import logo from '@assets/logo.svg';

export const NavItem = ({ label, link }: INavigationItem) => {
  return (
    <Link href={link} className="self-center rounded-2xl px-6 py-3 hover:bg-black hover:text-white">
      {label}
    </Link>
  );
};

export default function NavBar() {
  return (
    <div className="flex w-full text-xs z-50 flex-row h-[102px] self-center justify-between  px-20">
      <Link href="/" className="self-center">
        <Image src={logo} width={40} height={40} alt="logo" />
      </Link>
      <div className="flex flex-row gap-[59px]  text-black self-center">
        {NavigationItems.map(item => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}
