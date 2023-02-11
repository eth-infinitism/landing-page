import type { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Image from 'next/image';
import blue_blur from '@assets/blue_blur.png';
import green_blur from '@assets/green_blur.png';
interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen w-screen min-w-[1440px]">
      <Image src={blue_blur} alt="" className="absolute right-0 top-0 -z-10" />
      <Image src={green_blur} alt="" className="absolute left-0 top-56 -z-10" />
      <NavBar />
      <main className="w-full self-center overflow-hidden mt-20 px-44 flex flex-col gap-y-56">{children}</main>
      <Footer />
    </div>
  );
}
