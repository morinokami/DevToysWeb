import { NextPage } from "next";

import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const Checksum: NextPage = () => {
  const { t } = useLocale();

  return <MainLayout title={t.checksum.title}></MainLayout>;
};

export default Checksum;
