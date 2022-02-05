import Link from "next/link";
import { FaBars, FaGithub } from "react-icons/fa";

interface HeaderProps {
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const Header: React.VFC<HeaderProps> = ({ setNavIsOpen }) => {
  return (
    <div className="sticky top-0 z-20 flex h-8 w-full items-center bg-pink-500 px-4">
      <nav className="flex w-full flex-row justify-between">
        <div className="flex align-middle">
          <button className="mr-2 lg:hidden" onClick={() => setNavIsOpen(true)}>
            <FaBars />
          </button>
          <Link href="/">
            <a>DevToysWeb</a>
          </Link>
        </div>
        <button>
          <FaGithub />
        </button>
      </nav>
    </div>
  );
};

export default Header;
