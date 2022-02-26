import { NextPage } from "next";
import { useRouter } from "next/router";

import { NavItem } from "../data/locales/types";
import { useLocale } from "../hooks/useLocale";
import CardLayout from "../layouts/CardLayout";
import MainLayout from "../layouts/MainLayout";

const Search: NextPage = () => {
  const { t, nav } = useLocale();

  const router = useRouter();
  const { q } = router.query;
  let navItems: NavItem[] = [];
  if (q && (typeof q === "string" || q instanceof String)) {
    navItems =
      nav
        .map(({ items }) => items)
        .reduce((acc, curr) => acc?.concat(curr ?? []), []) ?? [];
    navItems = navItems.filter(({ longTitle }) =>
      longTitle.toLowerCase().includes(q.toLowerCase())
    );
    navItems.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <MainLayout title={"TODO"} cardLayout={true}>
      <CardLayout navItems={navItems} />
    </MainLayout>
  );
};

export default Search;
