import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full flex items-center">
      <Link href="/">
        <Image
          src="assets/images/logo.svg"
          alt="logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </Link>
      <nav className="space-x-7">
        <Link className="font-bold text-2xl" href="/">
          Articles
        </Link>
        <Link className="font-bold text-2xl" href="/">
          Collections
        </Link>
        <Link className="font-bold text-2xl" href="/">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
