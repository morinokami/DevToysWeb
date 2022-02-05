import { NextPage } from "next";
import { useRouter } from "next/router";

import NavCard from "../../components/NavCard";
import { nav } from "../../data/nav";
import MainLayout from "../../layouts/MainLayout";

const Category: NextPage = () => {
  const router = useRouter();
  const path = router.asPath;
  const category = nav.find(({ href }) => href === path);
  const title = category?.title;
  const navItems = category?.items ?? [];

  return (
    <MainLayout title={title}>
      <div className="flex h-full flex-row flex-wrap">
        {navItems.map(({ title, href, desc }) => {
          return (
            <div key={title}>
              <NavCard title={title} href={href} desc={desc} />
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default Category;
