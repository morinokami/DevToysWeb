import { NextPage } from "next";
import { useRouter } from "next/router";

import NavCard from "../../components/NavCard";
import { nav } from "../../data/nav";

const Category: NextPage = () => {
  const router = useRouter();
  const path = router.asPath;
  const navItems = nav.find(({ href }) => href === path)?.items ?? [];

  return (
    <div className="flex h-full flex-row flex-wrap">
      {navItems.map(({ title, href, desc }) => {
        return (
          <div key={title}>
            <NavCard title={title} href={href} desc={desc} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
