import React from "react";

import { Nav } from "../data/locales/types";
import Divider from "./Divider";
import NavCategory from "./NavCategory";
import { VSpacerS } from "./Spacer";

interface NavProps {
  nav: Nav;
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const _Nav: React.VFC<NavProps> = ({ nav }) => {
  const home = nav[0];
  return (
    <ul>
      <VSpacerS />
      <li>
        <NavCategory category={home} />
      </li>
      <VSpacerS />
      <Divider />
      <VSpacerS />
      {nav.slice(1).map((category) => (
        <React.Fragment key={category.title}>
          <li>
            <NavCategory category={category} />
          </li>
          <VSpacerS />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default _Nav;
