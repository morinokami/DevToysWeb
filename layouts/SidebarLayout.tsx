import React from "react";
import NavCategory from "../components/NavCategory";
import NavItem from "../components/NavItem";
import { nav } from "../data/nav";

const SidebarLayout: React.FC = ({ children }) => {
  return (
    <div className="mx-auto px-4">
      <div className="hidden lg:block fixed z-20 inset-0 right-auto w-[19.5rem] pt-2 px-4 overflow-y-auto">
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
      <div className="lg:pl-[19.5rem] pt-4">{children}</div>
    </div>
  );
};

export default SidebarLayout;
