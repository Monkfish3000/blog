'use client';

import { ReactNode } from 'react'; // Import ReactNode type

import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
