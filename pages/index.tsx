import type { NextPage } from "next";

import NavCard from "../components/NavCard";
import { nav } from "../data/nav";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  const navItems =
    nav
      .map(({ items }) => items)
      .reduce((acc, curr) => acc?.concat(curr ?? []), []) ?? [];
  navItems.sort((a, b) => a.title.localeCompare(b.title));
  navItems.push({
    title: "Settings",
    href: "/settings",
    desc: "Customize DevToysWeb look & feel",
  });

  return (
    <div>
      <MainLayout>
        <h1>All tools</h1>
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
    </div>
  );
};

export default Home;
