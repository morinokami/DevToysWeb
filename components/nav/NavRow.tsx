import Link from "next/link";
import { PropsWithChildren } from "react";

interface NavRowProps {
  href: string;
  selected: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const NavRow: React.FC<PropsWithChildren<NavRowProps>> = ({
  href,
  selected,
  onClick,
  children,
}) => {
  return (
    <Link href={href}>
      <a>
        <div
          className={`flex items-center rounded p-2 pl-0 hover:bg-light-40 hover:dark:bg-dark-30 ${
            selected ? "bg-light-40 dark:bg-dark-30" : ""
          }`}
          onClick={onClick}
        >
          {children}
        </div>
      </a>
    </Link>
  );
};

export default NavRow;
