import NavCard from "../components/NavCard";
import { NavItem } from "../data/nav";

interface CardLayoutProps {
  navItems: NavItem[];
}

const CardLayout: React.VFC<CardLayoutProps> = ({ navItems }) => {
  return (
    <div className="flex flex-wrap justify-around lg:justify-start">
      {navItems.map(({ title, href, desc }) => {
        return (
          <div key={title} className="my-2 mx-1 lg:my-3 lg:ml-0 lg:mr-4">
            <NavCard title={title} href={href} desc={desc} />
          </div>
        );
      })}
    </div>
  );
};

export default CardLayout;
