import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Aos from '../utils/Aos';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen max-h-screen overflow-hidden">
      <Aos />
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
