'use client';

import { useTheme } from 'next-themes';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeBtn from './ThemeBtn';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

import Sidebar from './Sidebar';

type title = {
  title: string;
};

const Header = ({ title }: title) => {
  const { resolvedTheme } = useTheme();
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  return (
    <>
      <header className="w-full flex items-center justify-between z-10">
        <nav className="space-x-7 flex items-center">
          <Image
            src={`/assets/images/logo${
              resolvedTheme === 'dark' ? 'White' : 'Black'
            }.png`}
            alt="logo"
            width={120}
            height={120}
            className="object-contain cursor-pointer"
            onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
          />
          {!title ? (
            <>
              <Link className="headerLink" href="/">
                Articles
              </Link>
              <Link className="headerLink" href="/">
                Collections
              </Link>
              <Link className="headerLink" href="/">
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
                className="font-light text-lg hover:text-customBlue"
                href="https://github.com/Monkfish3000"
                target="blank"
              >
                <FaGithub size={40} />
              </Link>
              <Link
                className="font-light text-lg hover:text-customBlue"
                href="https://www.linkedin.com/in/michael-sut/"
                target="blank"
              >
                <FaLinkedin size={40} />
              </Link>
            </>
          )}

          {
            <MagnifyingGlassIcon
              className={`h-10 w-10 hover:text-customBlue ${
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
      {sideBarIsOpen && (
        <nav className="fixed top-0 left-0 h-full w-1/3 bg-white z-50 border-r border-gray-400">
          <Sidebar toggleSidebar={setSideBarIsOpen} />
        </nav>
      )}
    </>
  );
};

export default Header;
