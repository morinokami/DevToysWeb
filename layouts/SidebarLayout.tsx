import React from "react";

import NavCategory from "../components/NavCategory";
import NavItem from "../components/NavItem";
import { nav } from "../data/nav";

const SidebarLayout: React.FC = ({ children }) => {
  return (
    <div className="mx-auto px-4">
      <div className="fixed inset-0 hidden w-64 overflow-y-auto bg-gray-50 px-4 pt-10 dark:bg-black lg:block">
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
          <li>
            <NavCategory title="Settings" href="/settings" />
          </li>
        </ul>
      </div>
      <div className="h-full pt-4 lg:pl-64">{children}</div>
    </div>
  );
};

export default SidebarLayout;
