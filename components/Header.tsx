import Link from "next/link";
import { FaBars, FaGithub } from "react-icons/fa";

interface HeaderProps {
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const Header: React.VFC<HeaderProps> = ({ setNavIsOpen }) => {
  return (
    <div className="sticky top-0 z-20 h-12 w-full bg-gray-100 px-4 dark:bg-dark-5">
      <nav className="flex h-full w-full items-center justify-between">
        <div className="flex">
          <button className="mr-2 lg:hidden" onClick={() => setNavIsOpen(true)}>
            <FaBars />
          </button>
          <div className="translate-y-px">DevToysWeb</div>
        </div>
        <Link href="https://github.com/morinokami/DevToysWeb">
          <a className="rounded p-2 hover:bg-gray-200 hover:dark:bg-dark-3">
            <FaGithub />
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
