import Link from "next/link";

import { IconBeer } from "../data/icon";

interface NavCardProps {
  title: string;
  href: string;
  desc: string;
}

const NavCard: React.VFC<NavCardProps> = ({ title, href, desc }) => {
  return (
    <Link href={href}>
      <a>
        <div className="my-3 mr-4 h-72 w-36 rounded border p-3 hover:cursor-pointer hover:bg-slate-50 dark:border-none dark:bg-dark-3 hover:dark:bg-slate-500">
          <div className="m-5 flex h-20 w-20 items-center justify-center dark:bg-dark-2">
            <IconBeer />
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
