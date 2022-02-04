import { NextPage } from "next";
import { useRouter } from "next/router";

const Category: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;
  return <div>[{category}]</div>;
};

export default Category;
