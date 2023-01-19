import type { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen bg-dark w-screen min-w-[1440px]">
      <NavBar />
      <main className="w-full self-center overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}
