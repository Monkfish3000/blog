'use client';

import { useTheme } from 'next-themes';

const ThemeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? 'GO-LIGHT' : 'GO-DARK'}
    </button>
  );
};

export default ThemeBtn;
