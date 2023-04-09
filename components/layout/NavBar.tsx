import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@assets/logo.svg';
import menu_icon from '@assets/icons/menu.svg';
import { INavigationItem, NavigationItems } from '@configs/home/navigation';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export const NavItem = ({ label, link }: INavigationItem) => {
  return (
    <Link href={link} className="self-center rounded-2xl px-6 py-3 hover:bg-black hover:text-white">
      {label}
    </Link>
  );
};

export default function NavBar() {
  return (
    <div className="flex w-full text-xs z-50 flex-row h-[102px] items-center justify-between  horizon-layout">
      <Link href="/" className="self-center">
        <Image src={logo} width={40} height={40} alt="logo" />
      </Link>

      <div className="hidden lg:flex flex-row gap-[59px]  text-black self-center">
        {NavigationItems.map(item => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>

      <Menu as="div" className="relative inline-block lg:hidden">
        <Menu.Button className="inline-flex w-full justify-center rounded-md">
          <Image src={menu_icon} alt="" className="w-5 h-5 lg:hidden" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {NavigationItems.map(({ label, link }) => (
              <div className="p-1" key={link}>
                <Menu.Item as={Fragment}>
                  {({ active }) => (
                    <Link
                      href={link}
                      className={`${
                        active ? 'bg-black text-white' : 'text-black'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      {label}
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
