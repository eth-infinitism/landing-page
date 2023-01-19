import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { INavigationItem, NavigationItems } from '@utils/constants';
import logo from '@assets/logo.svg';

const NavItem = ({ label, link }: INavigationItem) => {
  return (
    <Link href={link} className="self-center">
      {label}
    </Link>
  );
};

export default function NavBar() {
  return (
    <div className="sticky top-0 flex justify-center w-full bg-dark border-b border-gray-700 text-xs z-50">
      <div className="flex flex-row h-[102px] w-[950px] self-center justify-between ">
        <Image src={logo} width={40} height={40} alt="logo" />
        <div className="flex flex-row gap-[59px]  text-white self-center">
          {NavigationItems.map(item => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
