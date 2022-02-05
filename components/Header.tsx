import Link from "next/link";
import { FaBars, FaGithub } from "react-icons/fa";

interface HeaderProps {
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const Header: React.VFC<HeaderProps> = ({ setNavIsOpen }) => {
  return (
    <div className="sticky top-0 z-20 flex h-8 w-full items-center bg-gray-100 px-4 dark:bg-dark-5">
      <nav className="flex w-full flex-row justify-between">
        <div className="flex items-center">
          <button className="mr-2 lg:hidden" onClick={() => setNavIsOpen(true)}>
            <FaBars />
          </button>
          <Link href="/">
            <a>DevToysWeb</a>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="https://github.com/morinokami/DevToysWeb">
            <a>
              <FaGithub />
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
