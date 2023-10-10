import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeBtn from './ThemeBtn';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between z-10">
      <nav className="space-x-7 flex items-center">
        <Link href="/">
          <Image
            src="assets/images/logo.svg"
            alt="logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>

        <Link className="font-bold text-lg" href="/">
          Articles
        </Link>
        <Link className="font-bold text-lg" href="/">
          Collections
        </Link>
        <Link className="font-bold text-lg" href="/">
          About
        </Link>
      </nav>
      <nav className="space-x-7 flex items-center m-7">
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
        <Image
          src="assets/icons/search.svg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
          style={{ cursor: 'pointer' }}
        />
      </nav>
    </header>
  );
};

export default Header;
