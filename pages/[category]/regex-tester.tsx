import { NextPage } from "next";
import { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";

import { ClearButton, PasteButton } from "../../components/button";
import { FileInputButton, Input } from "../../components/io";
import { SectionHeader, SectionMain } from "../../components/section";
import Spacer, { VSpacerM } from "../../components/Spacer";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const removeTags = (html: string) => {
  html = html.replace(/<br>/g, "$br$");
  html = html.replace(/(?:\r\n|\r|\n)/g, "$br$");
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  html = tmp.textContent || tmp.innerText;
  html = html.replace(/\$br\$/g, "<br>");
  return html;
};

const RegexTester: NextPage = () => {
  const { t } = useLocale();

  const [regex, setRegex] = useState("");
  const [input, setInput] = useState("");

  let regexObj: RegExp | null = null;
  try {
    regexObj = new RegExp(regex, "g");
  } catch {
    regexObj = null;
  }
  const highlighted =
    regex.length > 0 && regexObj
      ? input.replaceAll(regexObj, '<span style="color:red">$&</span>')
      : input;

  // TODO: Cursor position

  return (
    <MainLayout title={t.regexTester.title}>
      <SectionMain>
        <SectionHeader
          title={t.regexTester.regularExpressionTitle}
          label="regex"
        >
          <PasteButton onClick={setRegex} />
        </SectionHeader>
        <Input id="regex" value={regex} onChange={setRegex} />
      </SectionMain>

      <VSpacerM />
      <SectionMain className="flex grow flex-col">
        <SectionHeader title={t.regexTester.textTitle} label="text">
          <PasteButton onClick={setInput} />
          <Spacer x={6} />
          <FileInputButton onFileRead={setInput} />
          <Spacer x={6} />
          <ClearButton onClick={() => setInput("")} />
        </SectionHeader>
        <ContentEditable
          className="min-h-[150px] w-full grow rounded border border-light-40 border-b-gray-400 bg-light-10 px-3 pt-[0.45rem] pb-[0.35rem] text-sm focus:border-b-blue-30 focus:outline-none dark:border-x-0 dark:border-t-0 dark:border-b-2 dark:border-gray-500 dark:bg-dark-30 focus:dark:border-blue-30 focus:dark:bg-dark-50"
          html={highlighted}
          onChange={(e) => {
            setInput(removeTags(e.target.value));
          }}
        />
      </SectionMain>
    </MainLayout>
  );
};

export default RegexTester;
