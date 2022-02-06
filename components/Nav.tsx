import React from "react";

import { IconAllTools, IconSettings } from "../data/icon";
import { Nav } from "../data/nav";
import Divider from "./Divider";
import NavCategory from "./NavCategory";
import Spacer from "./Spacer";

const SPACE = 6;

interface NavProps {
  nav: Nav;
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const _Nav: React.VFC<NavProps> = ({ nav }) => {
  return (
    <ul>
      <Spacer y={SPACE} />
      <li>
        <NavCategory
          category={{
            title: "All tools",
            href: "/",
            icon: IconAllTools,
          }}
        />
      </li>
      <Spacer y={SPACE} />
      <Divider />
      <Spacer y={SPACE} />
      {nav.map((category) => (
        <React.Fragment key={category.title}>
          <li>
            <NavCategory category={category} />
          </li>
          <Spacer y={SPACE} />
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
