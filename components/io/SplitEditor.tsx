import { useEffect, useState } from "react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

import { t } from "../../data/locales/en";
import { ClearButton, CopyButton, PasteButton } from "../button";
import { SectionHeader } from "../section";
import Spacer, { VSpacerS } from "../Spacer";
import { FileInputButton } from ".";
import CodeEditor, { LANGUAGE } from "./CodeEditor";

interface SplitEditorProps {
  input: string;
  setInput: (value: string) => void;
  output: string;
  inputLanguage: LANGUAGE;
  outputLanguage: LANGUAGE;
}

const SplitEditor: React.VFC<SplitEditorProps> = ({
  input,
  setInput,
  output,
  inputLanguage,
  outputLanguage,
}) => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sm = width && width < 768;

  return width ? (
    // TODO: Remove ts-ignores
    // @ts-ignore
    <ReflexContainer
      className="max-w-full"
      orientation={sm ? "horizontal" : "vertical"}
    >
      {/* @ts-ignore */}
      <ReflexElement className="flex h-full flex-col" minSize={300}>
        <SectionHeader title={t.common.inputTitle}>
          <PasteButton onClick={setInput} />
          <Spacer x={6} />
          <FileInputButton onFileRead={setInput} />
          <Spacer x={6} />
          <ClearButton onClick={() => setInput("")} />
        </SectionHeader>
        <VSpacerS />
        <div className="grow">
          <CodeEditor
            height="98%"
            value={input}
            onChange={(value) => setInput(value ?? "")}
            language={inputLanguage}
          />
        </div>
      </ReflexElement>
      {!sm && (
        <ReflexSplitter
          style={{
            width: "10px",
            border: "none",
            background: "transparent",
            height: "98%",
          }}
        />
      )}
      {/* @ts-ignore */}
      <ReflexElement className="flex h-full flex-col" minSize={300}>
        <SectionHeader title={t.common.outputTitle}>
          <CopyButton text={output} />
        </SectionHeader>
        <VSpacerS />
        <div className="grow">
          <CodeEditor
            height="98%"
            value={output}
            language={outputLanguage}
            readOnly={true}
          />
        </div>
      </ReflexElement>
    </ReflexContainer>
  ) : null;
};

export default SplitEditor;
