import { useRouter } from "next/router";
import React, { useState } from "react";

import { IconBeerMini, IconChevronDown, IconChevronUp } from "../data/icon";
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
      <NavRow href={category.href} selected={router.asPath === category.href}>
        <SelectionIndicator selected={router.asPath === category.href} />
        {/* TODO: update */}
        {category.icon ? <category.icon /> : <IconBeerMini />}
        <Spacer x={14} />
        <div className="grow translate-y-px text-sm">{category.title}</div>
        {category.items && (
          <button
            className="p-1 hover:bg-gray-300 hover:dark:bg-dark-2"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <IconChevronDown /> : <IconChevronUp />}
          </button>
        )}
      </NavRow>
      {isOpen && category.items && (
        <ul>
          {category.items.map((item) => (
            <React.Fragment key={item.title}>
              <Spacer y={6} />
              <li>
                <NavRow href={item.href} selected={router.asPath === item.href}>
                  <Spacer x={28} />
                  <SelectionIndicator selected={router.asPath === item.href} />
                  {/* TODO: update */}
                  {item.icon ? <item.icon /> : <IconBeerMini />}
                  <Spacer x={14} />
                  <div className="grow translate-y-px text-sm">
                    {item.title}
                  </div>
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
