'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';

type ToggleSidebarProps = {
  toggleSidebar: Function;
};

const Sidebar = ({ toggleSidebar }: ToggleSidebarProps) => {
  return (
    <>
      <button onClick={() => toggleSidebar(false)}>
        <AiOutlineClose className="m-7" color="#4c4949" size={40} />
      </button>
      <nav className="flex flex-col rounded-md w-[75%] m-auto text-center space-y-6">
        <Image
          className="m-auto"
          src="/assets/images/logoBlack.png"
          alt="logo"
          width={120}
          height={120}
        />
        <Link className="sidebarLink" href="/">
          Home
        </Link>
        <Link className="sidebarLink" href="/">
          Articles
        </Link>
        <Link className="sidebarLink" href="/">
          Collections
        </Link>
        <Link className="sidebarLink" href="/">
          About
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;
