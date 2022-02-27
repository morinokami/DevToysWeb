import { NextPage } from "next";

import { useLocale } from "../hooks/useLocale";
import MainLayout from "../layouts/MainLayout";

const NotFound: NextPage = () => {
  const { t } = useLocale();

  return (
    <MainLayout title={t.common.notFoundTitle}>
      <div>{t.common.notFoundDesc}</div>
    </MainLayout>
  );
};

export default NotFound;
