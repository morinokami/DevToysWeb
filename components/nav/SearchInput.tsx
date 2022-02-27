import { useRouter } from "next/router";
import { useRef, useState } from "react";

import { IconClearSearch, IconSearch } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";

const SearchInput: React.VFC = ({}) => {
  const { t, locale } = useLocale();
  const inputRef = useRef<HTMLInputElement>(null);

  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  return (
    <div className="relative mx-4 items-center rounded dark:border dark:border-b-0 dark:border-dark-30">
      <input
        ref={inputRef}
        type="text"
        className="w-full rounded border border-light-40 border-b-gray-400 bg-light-10 px-3 pt-[0.45rem] pb-[0.35rem] text-sm focus:border-b-blue-30 focus:outline-none dark:border-x-0 dark:border-t-0 dark:border-b-2 dark:border-gray-500 dark:bg-dark-30 dark:focus:border-blue-30 dark:focus:bg-dark-50"
        value={input}
        placeholder={t.search.inputPlaceholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            router.push(`/${locale}/search?q=${input}`);
          }
        }}
        spellCheck={false}
      />
      {input.length > 0 ? (
        <button
          className={`absolute right-7 top-[6px] rounded bg-light-10 p-1 ${
            isFocused
              ? "hover:bg-light-20 dark:bg-dark-50 dark:hover:bg-dark-40"
              : "dark:bg-dark-30 dark:hover:bg-dark-20"
          }`}
          onClick={() => {
            setInput("");
            inputRef.current?.focus();
          }}
        >
          <IconClearSearch />
        </button>
      ) : null}
      <button
        className={`absolute right-1 top-[6px] rounded bg-light-10 p-1 ${
          isFocused
            ? "hover:bg-light-20 dark:bg-dark-50 dark:hover:bg-dark-40"
            : "dark:bg-dark-30 dark:hover:bg-dark-20"
        }`}
        onClick={() => {
          if (input.length > 0) {
            router.push(`/${locale}/search?q=${input}`);
          }
        }}
      >
        <IconSearch />
      </button>
    </div>
  );
};

export default SearchInput;
