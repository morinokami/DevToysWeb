import { NextPage } from "next";
import { useRouter } from "next/router";

import { useLocale } from "../../hooks/useLocale";
import CardLayout from "../../layouts/CardLayout";
import MainLayout from "../../layouts/MainLayout";
import NotFound from "../404";

const Category: NextPage = () => {
  const { nav } = useLocale();
  const router = useRouter();
  const { asPath: path, locale } = router;
  const localePath = locale === "en" ? "" : `/${locale}`;
  const category = nav.find(({ href }) => href === `${localePath}${path}`);
  const title = category?.title;
  const navItems = category?.items ?? [];

  return navItems.length > 0 ? (
    <MainLayout title={title}>
      <CardLayout navItems={navItems} />
    </MainLayout>
  ) : (
    <NotFound />
  );
};

export default Category;
