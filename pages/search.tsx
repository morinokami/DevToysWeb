import { NextPage } from "next";
import { useRouter } from "next/router";
import pupa from "pupa";

import { NavItem } from "../data/locales/types";
import { useLocale } from "../hooks/useLocale";
import CardLayout from "../layouts/CardLayout";
import MainLayout from "../layouts/MainLayout";

const Search: NextPage = () => {
  const { t, nav } = useLocale();

  const router = useRouter();
  const { q } = router.query;
  let navItems: NavItem[] = [];
  const search =
    q && (typeof q === "string" || q instanceof String) ? q.toLowerCase() : "";
  if (search.length > 0) {
    navItems =
      nav
        .map(({ items }) => items)
        .reduce((acc, curr) => acc?.concat(curr ?? []), []) ?? [];
    navItems = navItems.filter(({ longTitle, desc }) => {
      return (
        longTitle.toLowerCase().includes(search) ||
        desc.toLowerCase().includes(search)
      );
    });
    navItems.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <MainLayout
      title={pupa(t.common.searchResultTitle, [search])}
      cardLayout={true}
    >
      <CardLayout navItems={navItems} />
    </MainLayout>
  );
};

export default Search;
