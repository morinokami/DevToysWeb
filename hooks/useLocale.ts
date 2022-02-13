import { useRouter } from "next/router";

import * as en from "../data/locales/en";
import * as ja from "../data/locales/ja";

export const useLocale = () => {
  const router = useRouter();
  const { locale } = router;

  return { ...(locale === "en" ? en : ja), locale };
};
