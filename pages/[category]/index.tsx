import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { nav } from "../../data/nav";

const Category: NextPage = () => {
  const router = useRouter();
  const path = router.asPath;
  const navItems = nav.find(({ href }) => href === path)?.items ?? [];

  return (
    <>
      {navItems.map(({ title, href }) => {
        return (
          <div key={title}>
            <Link href={href}>{title}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Category;
