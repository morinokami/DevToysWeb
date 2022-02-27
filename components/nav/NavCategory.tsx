import { useRouter } from "next/router";
import React, { useState } from "react";

import { IconChevronDown, IconChevronUp } from "../../data/icon";
import { NavCategory } from "../../data/locales/types";
import SelectionIndicator from "../SelectionIndicator";
import Spacer, { VSpacerS } from "../Spacer";
import NavRow from "./NavRow";

interface NavCategoryProps {
  category: NavCategory;
}

const NavCategory: React.VFC<NavCategoryProps> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { asPath: path, locale } = router;
  const localePath = locale === "en" ? "" : `/${locale}`;

  return (
    <div className="px-2">
      <NavRow
        href={category.href}
        selected={router.asPath === category.href}
        onClick={() => setIsOpen(!isOpen)}
      >
        <SelectionIndicator
          selected={`${localePath}${path}` === category.href}
        />
        <category.icon />
        <Spacer x={14} />
        <div className="grow translate-y-px text-sm">{category.title}</div>
        {category.items && (
          <button
            className="p-1"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            {isOpen ? <IconChevronDown /> : <IconChevronUp />}
          </button>
        )}
      </NavRow>
      {isOpen && category.items && (
        <ul>
          {category.items.map((item) => (
            <React.Fragment key={item.title}>
              <VSpacerS />
              <li>
                <NavRow
                  href={item.href}
                  selected={`${localePath}${path}` === item.href}
                >
                  <Spacer x={28} />
                  <SelectionIndicator
                    selected={`${localePath}${path}` === item.href}
                  />
                  <item.icon />
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
