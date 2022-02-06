import Link from "next/link";

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem: React.VFC<NavItemProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <a className="block grow hover:bg-white hover:dark:bg-dark-3">{title}</a>
    </Link>
  );
};

export default NavItem;
