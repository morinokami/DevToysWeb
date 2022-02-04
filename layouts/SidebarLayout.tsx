import Link from "next/link";
import React from "react";
import { nav } from "../data/nav";

const SidebarLayout: React.FC = ({ children }) => {
  return (
    <div className="mx-auto px-4">
      <div className="hidden lg:block fixed z-20 inset-0 right-auto w-[19.5rem] px-4 overflow-y-auto">
        <ul>
          {nav.map(({ title, href, items }) => (
            <li key={title}>
              <Link href={href}>{title}</Link>
              {items && (
                <ul>
                  {items.map(({ title, href }) => (
                    <li key={title}>
                      <Link href={href}>{title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:pl-[19.5rem]">{children}</div>
    </div>
  );
};

export default SidebarLayout;
