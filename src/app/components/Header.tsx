import Link from 'next/link';
import Image from 'next/image';

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
        <Link className="font-light text-lg" href="/">
          Manifesto
        </Link>
        <Link className="font-light text-lg" href="/">
          Membership
        </Link>
        <Link className="font-light text-lg" href="/">
          Sign in
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
