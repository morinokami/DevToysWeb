import Link from "next/link";

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem: React.VFC<NavItemProps> = ({ title, href }) => {
  return (
    <div className="flex pt-2 pl-4">
      <Link href={href}>
        <a className="block grow">{title}</a>
      </Link>
    </div>
  );
};

export default NavItem;
