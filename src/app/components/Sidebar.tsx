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
      <ul>
        <Link href="/">Home</Link>
        <li>Articles</li>
        <li>Collections</li>
        <li>About</li>
      </ul>
    </>
  );
};

export default Sidebar;
