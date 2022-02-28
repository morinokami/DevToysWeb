import { Dispatch, useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<T>] => {
  const [state, setState] = useState<T>(() => {
    const localStorageValue = window.localStorage.getItem(key);
    if (localStorageValue) {
      try {
        return JSON.parse(localStorageValue);
      } catch {
        window.localStorage.removeItem(key);
      }
    }
    return initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
