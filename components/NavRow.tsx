import Link from "next/link";

interface NavRowProps {
  href: string;
  selected: boolean;
}

const NavRow: React.FC<NavRowProps> = ({ href, selected, children }) => {
  return (
    <Link href={href}>
      <a>
        <div
          className={`flex items-center rounded p-2 pl-0 hover:bg-gray-200 hover:dark:bg-dark-30 ${
            selected ? "bg-gray-200 dark:bg-dark-30" : ""
          }`}
        >
          {children}
        </div>
      </a>
    </Link>
  );
};

export default NavRow;
