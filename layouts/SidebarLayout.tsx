import React from "react";

import NavCategory from "../components/NavCategory";
import NavItem from "../components/NavItem";
import { nav } from "../data/nav";

const SidebarLayout: React.FC = ({ children }) => {
  return (
    <div className="mx-auto px-4">
      <div className="fixed inset-0 right-auto z-20 hidden w-[19.5rem] overflow-y-auto bg-gray-50 px-4 pt-2 dark:bg-black lg:block">
        <ul>
          {nav.map(({ title, href, items }) => (
            <li key={title}>
              <NavCategory title={title} href={href} />
              {items && (
                <ul>
                  {items.map(({ title, href }) => (
                    <li key={title}>
                      <NavItem title={title} href={href} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full pt-4 lg:pl-[19.5rem]">{children}</div>
    </div>
  );
};

export default SidebarLayout;
