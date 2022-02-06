import { useRouter } from "next/router";
import React, { useState } from "react";

import { AngleDown, AngleUp, IconBeerMini } from "../data/icon";
import { NavCategory } from "../data/nav";
import NavRow from "./NavRow";
import Spacer from "./Spacer";

interface SelectionIndicatorProps {
  selected: boolean;
}

const SelectionIndicator: React.VFC<SelectionIndicatorProps> = ({
  selected,
}) => {
  return selected ? (
    <>
      <div className="h-4 border-l-[3px] border-blue-500 dark:border-l-2" />
      <Spacer x={12} />
    </>
  ) : (
    <Spacer x={14} />
  );
};

interface NavCategoryProps {
  category: NavCategory;
}

const NavCategory: React.VFC<NavCategoryProps> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="px-2">
      <NavRow href={category.href}>
        <SelectionIndicator selected={router.asPath === category.href} />
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
            <React.Fragment key={title}>
              <Spacer y={6} />
              <li>
                <NavRow href={href}>
                  <Spacer x={28} />
                  <SelectionIndicator selected={router.asPath === href} />
                  <IconBeerMini />
                  <Spacer x={14} />
                  <div className="grow">{title}</div>
                </NavRow>
              </li>
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavCategory;
