import { NextPage } from "next";
import { useRouter } from "next/router";

import { nav } from "../../data/nav";
import CardLayout from "../../layouts/CardLayout";
import MainLayout from "../../layouts/MainLayout";

const Category: NextPage = () => {
  const router = useRouter();
  const path = router.asPath;
  const category = nav.find(({ href }) => href === path);
  const title = category?.title;
  const navItems = category?.items ?? [];

  return (
    <MainLayout title={title}>
      <CardLayout navItems={navItems} />
    </MainLayout>
  );
};

export default Category;
