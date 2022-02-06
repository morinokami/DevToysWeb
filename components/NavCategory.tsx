import { useState } from "react";

import { AngleDown, AngleUp, IconBeerMini } from "../data/icon";
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
            className="p-1 hover:bg-gray-300 hover:dark:bg-dark-2"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <AngleDown /> : <AngleUp />}
          </button>
        )}
      </NavRow>
      {isOpen && category.items && (
        <ul>
          {category.items.map(({ title, href }) => (
            <>
              <Spacer y={6} />
              <li key={title}>
                <NavRow href={href}>
                  <Spacer x={28} />
                  <IconBeerMini />
                  <Spacer x={14} />
                  <div className="grow">{title}</div>
                </NavRow>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavCategory;
