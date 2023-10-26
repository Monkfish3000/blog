'use client';

import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ toggleSidebar }) => {
  return (
    <>
      <button onClick={() => toggleSidebar(false)}>
        <AiOutlineClose className="m-7" color="#4c4949" size={40} />
      </button>
      <ul>
        <li>Home</li>
        <li>Articles</li>
        <li>Collections</li>
        <li>About</li>
      </ul>
    </>
  );
};

export default Sidebar;
