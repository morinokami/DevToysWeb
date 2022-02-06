import { useState } from "react";

import { IconBeerMini } from "../data/icon";
import { NavCategory } from "../data/nav";
import NavRow from "./NavRow";
import Spacer from "./Spacer";

interface NavCategoryProps {
  category: NavCategory;
}

const NavCategory: React.VFC<NavCategoryProps> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-2">
      <NavRow href={category.href}>
        <IconBeerMini />
        <Spacer x={14} />
        <div className="grow">{category.title}</div>
        {category.items && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "-" : "+"}
          </button>
        )}
      </NavRow>
      {isOpen && category.items && (
        <ul>
          {category.items.map(({ title, href }) => (
            <li key={title}>
              <NavRow href={href}>
                <Spacer x={28} />
                <IconBeerMini />
                <Spacer x={14} />
                <div className="grow">{title}</div>
              </NavRow>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavCategory;
