import Link from "next/link";
import { useState } from "react";

import { NavCategory } from "../data/nav";
import NavItem from "./NavItem";

interface NavCategoryProps {
  category: NavCategory;
}

const NavCategory: React.VFC<NavCategoryProps> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex pt-2">
        <div className="grow">
          <Link href={category.href}>
            <a>{category.title}</a>
          </Link>
        </div>
        {category.items && (
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "-" : "+"}
          </button>
        )}
      </div>
      {isOpen && category.items && (
        <ul>
          {category.items.map(({ title, href }) => (
            <li key={title}>
              <NavItem title={title} href={href} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NavCategory;
