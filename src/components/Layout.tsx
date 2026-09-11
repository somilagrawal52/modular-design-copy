import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundEffect from './BackgroundEffect';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-light text-stone overflow-x-hidden">
      <div className="grain" />
      <BackgroundEffect />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
