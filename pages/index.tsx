import type { NextPage } from "next";

import { useLocale } from "../hooks/useLocale";
import CardLayout from "../layouts/CardLayout";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  const { nav } = useLocale();
  const navItems =
    nav
      .map(({ items }) => items)
      .reduce((acc, curr) => acc?.concat(curr ?? []), []) ?? [];
  navItems.sort((a, b) => a.title.localeCompare(b.title));
  const settings = nav[nav.length - 1];
  navItems.push({
    title: settings.title,
    longTitle: settings.title,
    href: settings.href,
    desc: settings.desc ?? "",
  });

  return (
    <div>
      <MainLayout>
        <CardLayout navItems={navItems} />
      </MainLayout>
    </div>
  );
};

export default Home;
