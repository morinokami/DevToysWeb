import { useRouter } from "next/router";
import React, { useState } from "react";

import { IconBeerMini, IconChevronDown, IconChevronUp } from "../data/icon";
import { NavCategory } from "../data/nav";
import NavRow from "./NavRow";
import SelectionIndicator from "./SelectionIndicator";
import Spacer from "./Spacer";

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
            className="p-1"
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
