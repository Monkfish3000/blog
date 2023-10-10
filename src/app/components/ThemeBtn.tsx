'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="h-8 w-8 text-white" />
      ) : (
        <MoonIcon className="h-8 w-8 text-slate-800" />
      )}
    </button>
  );
};

export default ThemeBtn;
