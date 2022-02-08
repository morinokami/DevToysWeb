import { Listbox, Switch, Transition } from "@headlessui/react";
import { NextPage } from "next";
import React from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Button from "../../components/Button";
import Configuration from "../../components/Configuration";
import SectionHeader from "../../components/SectionHeader";
import Spacer from "../../components/Spacer";
import { IconBeerMini, IconCopy } from "../../data/icon";
import MainLayout from "../../layouts/MainLayout";

const bases = [
  { name: "Octal" },
  { name: "Binary" },
  { name: "Decimal" },
  { name: "Hexadecimal" },
];

const NumberBase: NextPage = () => {
  const [input, setInput] = useState("");
  const [format, setFormat] = useState(true);
  const [base, setBase] = useState(bases[2]);

  const decimal = Number(input);
  const hex = Number(input).toString(16);
  const octal = Number(input).toString(8);
  const binary = Number(input).toString(2);

  return (
    <MainLayout title="Number Base Converter">
      <div>
        <SectionHeader title="Configuration" />
        <Configuration icon={IconBeerMini} title="Format number">
          <Switch
            checked={format}
            onChange={setFormat}
            className={`${
              format ? "bg-blue-500" : "border-2 bg-dark-5"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
          >
            <span className="sr-only">Format the result</span>
            <span
              aria-hidden="true"
              className={`${
                format ? "translate-x-7" : "translate-x-1"
              } inline-block h-3 w-3 transform rounded-full bg-white transition duration-200 ease-in-out`}
            />
          </Switch>
        </Configuration>
        <Configuration
          icon={IconBeerMini}
          title="Input type"
          subtitle="Select which Input type you want to use"
        >
          <Listbox value={base} onChange={setBase}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{base.name}</span>
              </Listbox.Button>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {bases.map((base, baseIdx) => (
                    <Listbox.Option
                      key={baseIdx}
                      className={({ active }) =>
                        `${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }
                          relative cursor-default select-none py-2 pl-10 pr-4`
                      }
                      value={base}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {base.name}
                          </span>
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
        </Configuration>
      </div>
      <div>
        <SectionHeader title="Input" />
        <Spacer y={5} />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <SectionHeader title="Hexadecimal" />
        <Spacer y={5} />
        <input type="text" value={hex} readOnly />
        <CopyToClipboard text={hex}>
          <Button icon={IconCopy} />
        </CopyToClipboard>
      </div>
      <div>
        <SectionHeader title="Decimal" />
        <Spacer y={5} />
        <input type="text" value={decimal} readOnly />
        <CopyToClipboard text={decimal.toString()}>
          <Button icon={IconCopy} />
        </CopyToClipboard>
      </div>
      <div>
        <SectionHeader title="Octal" />
        <Spacer y={5} />
        <input type="text" value={octal} readOnly />
        <CopyToClipboard text={octal}>
          <Button icon={IconCopy} />
        </CopyToClipboard>
      </div>
      <div>
        <SectionHeader title="Binary" />
        <Spacer y={5} />
        <input type="text" value={binary} readOnly />
        <CopyToClipboard text={binary}>
          <Button icon={IconCopy} />
        </CopyToClipboard>
      </div>
    </MainLayout>
  );
};

export default NumberBase;
