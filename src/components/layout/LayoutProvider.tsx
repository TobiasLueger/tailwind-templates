'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Layout from './Layout';

interface LayoutProviderProps {
  children: ReactNode;
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  const pathname = usePathname();
  const isTestPage = pathname?.startsWith('/test');

  if (isTestPage) {
    return children;
  }

  return <Layout>{children}</Layout>;
}
