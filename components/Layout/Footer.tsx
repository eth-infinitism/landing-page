import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@assets/logo.svg';
import { INavigationItem, NavigationItems } from '@configs/home/navigation';
import { ISocialItem, SocialItems } from '@configs/home/social';

const LinkItem = ({ label, link }: INavigationItem) => (
  <Link className="text-black text-xs w-36 " href={link}>
    {label}
  </Link>
);

const SocialItem = ({ icon, url }: ISocialItem) => (
  <Link href={url}>
    <Image src={icon} width={36} height={36} alt="logo" />
  </Link>
);

export default function Footer() {
  return (
    <div className="absolute w-full bottom-0 h-22 border-t border-grey py-5 px-20">
      <Image src={logo} width={40} height={40} alt="logo" />

      <div className="flex flex-row justify-between mt-6">
        <div className="flex flex-wrap max-w-sm">
          {NavigationItems.map(item => (
            <LinkItem key={item.label} {...item} />
          ))}
        </div>

        <div className="flex flex-col self-center items-end">
          <div className="flex flex-row gap-x-4 ">
            {SocialItems.map((item, idx) => (
              <SocialItem key={idx} {...item} />
            ))}
          </div>
          {/* TODO: check this */}
          <p className="text-slate-300 text-xs mt-5">© 2023 ETHGlobal. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
