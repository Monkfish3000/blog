'use client';

import { useTheme } from 'next-themes';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeBtn from './ThemeBtn';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = ({ title }) => {
  const { resolvedTheme } = useTheme();

  console.log(title);

  return (
    <header className="w-full flex items-center justify-between z-10">
      <nav className="space-x-7 flex items-center">
        <Link href="/">
          <Image
            src={`/assets/images/logo${
              resolvedTheme === 'dark' ? 'White' : 'Black'
            }.png`}
            alt="logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>

        {!title ? (
          <>
            <Link className="font-bold text-lg" href="/">
              Articles
            </Link>
            <Link className="font-bold text-lg" href="/">
              Collections
            </Link>
            <Link className="font-bold text-lg" href="/">
              About
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-extrabold">{title}</h1>
          </>
        )}
      </nav>
      <nav className="space-x-7 flex items-center m-7">
        {title ? (
          <ThemeBtn />
        ) : (
          <>
            <ThemeBtn />
            <Link
              className="font-light text-lg"
              href="https://github.com/Monkfish3000"
              target="blank"
            >
              <FaGithub size={40} />
            </Link>
            <Link
              className="font-light text-lg"
              href="https://www.linkedin.com/in/michael-sut/"
              target="blank"
            >
              <FaLinkedin size={40} />
            </Link>
          </>
        )}

        {
          <MagnifyingGlassIcon
            className={`h-10 w-10 ${
              resolvedTheme === 'dark' ? 'text-white' : 'text-black'
            }`}
            style={{ cursor: 'pointer' }}
          />
        }
        {/* <Image
          src="assets/icons/search.svg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
          style={{ cursor: 'pointer' }}
        /> */}
      </nav>
    </header>
  );
};

export default Header;
