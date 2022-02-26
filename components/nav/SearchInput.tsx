import { useRouter } from "next/router";
import { useState } from "react";

import { useLocale } from "../../hooks/useLocale";

interface SearchInputProps {}

// TODO: Add search icon
// TODO: Add clear button
const SearchInput: React.VFC<SearchInputProps> = ({}) => {
  const { t, locale } = useLocale();

  const [input, setInput] = useState("");
  const router = useRouter();

  return (
    <div className="flex items-center px-4">
      <input
        type="text"
        className="grow rounded border border-light-40 border-b-gray-400 bg-light-10 px-3 pt-[0.45rem] pb-[0.35rem] text-sm focus:border-b-blue-30 focus:outline-none dark:border-x-0 dark:border-t-0 dark:border-b-2 dark:border-gray-500 dark:bg-dark-30 focus:dark:border-blue-30 focus:dark:bg-dark-50"
        value={input}
        placeholder={t.search.searchPlaceholder}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            router.push(`/${locale}/search?q=${input}`);
          }
        }}
        spellCheck={false}
      />
    </div>
  );
};

export default SearchInput;
