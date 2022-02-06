import type { NextPage } from "next";

import { nav } from "../data/nav";
import CardLayout from "../layouts/CardLayout";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  const navItems =
    nav
      .map(({ items }) => items)
      .reduce((acc, curr) => acc?.concat(curr ?? []), []) ?? [];
  navItems.sort((a, b) => a.title.localeCompare(b.title));
  navItems.push({
    title: "Settings",
    longTitle: "Settings",
    href: "/settings",
    desc: "Customize DevToysWeb look & feel",
  });

  return (
    <div>
      <MainLayout>
        <h1 className="text-lg">All tools</h1>
        <CardLayout navItems={navItems} />
      </MainLayout>
    </div>
  );
};

export default Home;
