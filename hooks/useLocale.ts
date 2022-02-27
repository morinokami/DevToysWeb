import { useRouter } from "next/router";

import * as en from "../data/locales/en";
import * as ja from "../data/locales/ja";

export const useLocale = () => {
  const router = useRouter();
  const { locale } = router;

  switch (locale) {
    case "en":
      return { ...en, locale };
    case "ja":
      return { ...ja, locale };
    default:
      return { ...en, locale: "en" };
  }
};
