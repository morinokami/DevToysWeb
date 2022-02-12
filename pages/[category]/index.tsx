import { NextPage } from "next";
import { useRouter } from "next/router";

import { useLocale } from "../../hooks/useLocale";
import CardLayout from "../../layouts/CardLayout";
import MainLayout from "../../layouts/MainLayout";

const Category: NextPage = () => {
  const { nav } = useLocale();
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
