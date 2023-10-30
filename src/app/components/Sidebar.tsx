'use client';

import Link from 'next/link';
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
      <ul className="text-center space-y-6">
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
      </ul>
    </>
  );
};

export default Sidebar;
