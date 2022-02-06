import NavCard from "../components/NavCard";
import Spacer from "../components/Spacer";
import { NavItem } from "../data/nav";

interface CardLayoutProps {
  navItems: NavItem[];
}

const CardLayout: React.VFC<CardLayoutProps> = ({ navItems }) => {
  return (
    <>
      <div className="md:hidden">
        <Spacer y={12} />
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-y-4 md:flex md:flex-wrap md:justify-start xs:grid-cols-2">
        {navItems.map(({ title, href, desc }) => {
          return (
            <div
              key={title}
              className="sm:flex sm:justify-center md:my-3 md:ml-0 md:mr-4"
            >
              <NavCard title={title} href={href} desc={desc} />
            </div>
          );
        })}
      </div>
      <div className="md:hidden">
        <Spacer y={24} />
      </div>
    </>
  );
};

export default CardLayout;
