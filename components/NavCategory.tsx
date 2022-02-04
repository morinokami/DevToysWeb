import Link from "next/link";

interface NavCategoryProps {
  title: string;
  href: string;
}

const NavCategory: React.FC<NavCategoryProps> = ({ title, href }) => {
  return (
    <div className="pt-2">
      <Link href={href}>{title}</Link>
    </div>
  );
};

export default NavCategory;
