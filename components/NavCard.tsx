import Link from "next/link";
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";

interface NavCardProps {
  title: string;
  href: string;
  desc: string;
}

const NavCard: React.VFC<NavCardProps> = ({ title, href, desc }) => {
  return (
    <Link href={href}>
      <a>
        <div className="mx-2 my-3 h-72 w-36 border p-3 hover:cursor-pointer hover:bg-slate-50 dark:border-none dark:bg-slate-600 hover:dark:bg-slate-500">
          <div className="m-5 flex h-20 w-20 items-center justify-center dark:bg-slate-400">
            <IconContext.Provider value={{ size: "72" }}>
              <FaBeer />
            </IconContext.Provider>
          </div>
          <div>
            <div className="text-sm">{title}</div>
            <div className="pt-1 text-xs text-gray-400">{desc}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NavCard;
