import { Nav } from "../data/nav";
import NavCategory from "./NavCategory";

interface NavProps {
  nav: Nav;
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const _Nav: React.VFC<NavProps> = ({ nav }) => {
  return (
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
  );
};

export default _Nav;
