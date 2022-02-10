import Link from "next/link";

import { IconBeer } from "../data/icon";
import { NavItem } from "../data/nav";

interface NavCardProps {
  navItem: NavItem;
}

const NavCard: React.VFC<NavCardProps> = ({ navItem }) => {
  return (
    <Link href={navItem.href}>
      <a>
        <div className="h-72 w-36 rounded border p-3 hover:cursor-pointer hover:bg-slate-50 dark:border-none dark:bg-dark-30 hover:dark:bg-slate-500">
          <div className="m-5 mb-8 flex h-20 w-20 items-center justify-center rounded dark:bg-dark-20">
            {/* TODO: update */}
            {navItem.icon ? <navItem.icon large={true} /> : <IconBeer />}
          </div>
          <div>
            <div className="text-sm">{navItem.longTitle}</div>
            <div className="pt-1 text-xs text-gray-400">{navItem.desc}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NavCard;
