import React from "react";

import NavCategory from "../components/NavCategory";
import NavItem from "../components/NavItem";
import { nav } from "../data/nav";

const SidebarLayout: React.FC = ({ children }) => {
  return (
    <div className="mx-auto px-4">
      <div className="fixed inset-0 hidden w-64 overflow-y-auto bg-gray-50 px-4 pt-10 dark:bg-black lg:block">
        <ul>
          {nav.map((category) => (
            <li key={category.title}>
              <NavCategory category={category} />
            </li>
          ))}
          <li>
            <NavCategory
              category={{
                title: "Settings",
                href: "/settings",
              }}
            />
          </li>
        </ul>
      </div>
      <div className="h-full pt-4 lg:pl-64">{children}</div>
    </div>
  );
};

export default SidebarLayout;
