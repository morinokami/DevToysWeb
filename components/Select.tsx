import { Listbox, Transition } from "@headlessui/react";
import React from "react";

interface SelectProps {
  options: { name: string }[];
  value: { name: string };
  onChange: (value: { name: string }) => void;
}

const Select: React.VFC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-pointer rounded bg-white py-2 pl-3 pr-10 text-left text-sm dark:bg-dark-2">
          <span className="block truncate">{value.name}</span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-sm dark:bg-dark-3">
            {options.map((option, optionIdx) => (
              <Listbox.Option
                key={optionIdx}
                className={({ active }) =>
                  `${active ? "dark:bg-dark-2" : ""}
                          relative cursor-pointer select-none py-2 px-3`
                }
                value={option}
              >
                {({ selected, active }) => (
                  <>
                    <span className={"block truncate"}>{option.name}</span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-amber-600" : "text-amber-600"
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        x
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;
