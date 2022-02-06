import Link from "next/link";

interface NavRowProps {
  href: string;
}

const NavRow: React.FC<NavRowProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>
        <div className="flex items-center rounded p-2 hover:bg-white hover:dark:bg-dark-3">
          {children}
        </div>
      </a>
    </Link>
  );
};

export default NavRow;
