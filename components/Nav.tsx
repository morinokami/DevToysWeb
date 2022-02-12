import React from "react";

import { IconAllTools, IconSettings } from "../data/icon";
import { Nav } from "../data/locales/types";
import Divider from "./Divider";
import NavCategory from "./NavCategory";
import { VSpacerS } from "./Spacer";

interface NavProps {
  nav: Nav;
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const _Nav: React.VFC<NavProps> = ({ nav }) => {
  return (
    <ul>
      <VSpacerS />
      <li>
        <NavCategory
          category={{
            title: "All tools",
            href: "/",
            icon: IconAllTools,
          }}
        />
      </li>
      <VSpacerS />
      <Divider />
      <VSpacerS />
      {nav.map((category) => (
        <React.Fragment key={category.title}>
          <li>
            <NavCategory category={category} />
          </li>
          <VSpacerS />
        </React.Fragment>
      ))}
      <li>
        <NavCategory
          category={{
            title: "Settings",
            href: "/settings",
            icon: IconSettings,
          }}
        />
      </li>
    </ul>
  );
};

export default _Nav;
