'use client';

const Sidebar = ({ toggleSidebar }) => {
  return (
    <>
      <button onClick={() => toggleSidebar(false)}>X</button>
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
