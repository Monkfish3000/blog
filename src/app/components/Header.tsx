"use client";
import Head from "next/head";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeBtn from "./ThemeBtn";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import Sidebar from "./Sidebar";

type title = {
  title: string;
};

const Header = ({ title }: title) => {
  const { resolvedTheme } = useTheme();
  const pathName = usePathname();
  const router = useRouter();

  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);
  const [mobMenuOpen, setMobMenuOpen] = useState<boolean>();

  return (
    <>
      <Head>
        <link rel="preload" href="/assets/images/logoBlack.svg" as="image" />
      </Head>
      <header className="w-full flex items-center justify-between z-10">
        <nav className="space-x-7 flex items-center">
          <Image
            src={"/assets/images/logoBlack.svg"}
            alt="logo"
            width={120}
            height={120}
            className={`object-contain ${
              resolvedTheme === "dark" ? "logo" : ""
            } ${title || pathName === "/coming-soon" ? "cursor-pointer" : ""}`}
            onClick={() => {
              title && setSideBarIsOpen(!sideBarIsOpen);
              if (pathName === "/coming-soon") {
                router.push("/");
              }
            }}
          />
          {!title ? (
            <>
              <Link className="headerLink hidden md:block" href="/coming-soon">
                Articles
              </Link>
              <Link className="headerLink hidden md:block" href="/coming-soon">
                Collections
              </Link>
              <Link className="headerLink hidden md:block" href="/about">
                About
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-base sm:text-2xl font-extrabold">{title}</h1>
            </>
          )}
        </nav>
        <nav className="space-x-7 flex items-center m-7">
          {title ? (
            <ThemeBtn mobile={false} />
          ) : (
            <>
              <ThemeBtn mobile={false} />
              <Link
                className="font-light text-lg hover:text-customBlue hidden sm:flex"
                href="https://github.com/Monkfish3000"
                target="blank"
              >
                <FaGithub size={40} />
              </Link>
              <Link
                className="font-light text-lg hover:text-customBlue hidden sm:flex"
                href="https://www.linkedin.com/in/michael-sut/"
                target="blank"
              >
                <FaLinkedin size={40} />
              </Link>
            </>
          )}

          {
            <MagnifyingGlassIcon
              className={`h-10 w-10 hover:text-customBlue hidden md:block ${
                resolvedTheme === "dark" ? "text-white" : "text-black"
              }`}
              style={{ cursor: "pointer" }}
            />
          }
          {
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={`/assets/images/${mobMenuOpen ? "close" : "menu"}.svg`}
                className={resolvedTheme === "dark" ? "" : "logo"}
                alt="Mobile dropdown menu"
                onClick={() => setMobMenuOpen(!mobMenuOpen)}
              />
              <div
                className={`${!mobMenuOpen ? "hidden" : "flex"} p-6 ${
                  resolvedTheme === "dark" ? "bg-gray-950" : "bg-gray-50"
                }  items-center justify-center shadow-2xl absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              >
                <ul className="list-none flex items-center flex-col gap-4">
                  <li>
                    <ThemeBtn mobile={true} />
                  </li>
                  <li>
                    <Link
                      className={`font-light text-lg hover:text-customBlue sm:flex`}
                      href="https://github.com/Monkfish3000"
                      target="blank"
                    >
                      <FaGithub size={40} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-light text-lg hover:text-customBlue sm:flex"
                      href="https://www.linkedin.com/in/michael-sut/"
                      target="blank"
                    >
                      <FaLinkedin size={40} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-bold text-lg hover:text-customBlue sm:flex"
                      href="/about"
                    >
                      About Me
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
        <nav className="fixed top-0 left-0 h-full sm:w-1/3 w-2/3 bg-white z-50 border-r border-gray-300 dark:bg-customBlack">
          {title ? <Sidebar toggleSidebar={setSideBarIsOpen} /> : null}
        </nav>
      )}
    </>
  );
};

export default Header;
