import { Nav } from "../data/nav";
import Divider from "./Divider";
import NavCategory from "./NavCategory";
import Spacer from "./Spacer";

interface NavProps {
  nav: Nav;
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const _Nav: React.VFC<NavProps> = ({ nav }) => {
  return (
    <ul>
      <li>
        <NavCategory
          category={{
            title: "All tools",
            href: "/",
          }}
        />
      </li>
      <Spacer y={2} />
      <Divider />
      <Spacer y={2} />
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
