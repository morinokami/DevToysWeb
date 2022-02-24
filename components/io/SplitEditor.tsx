import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

import { t } from "../../data/locales/en";
import { ClearButton, CopyButton, PasteButton } from "../button";
import { SectionHeader } from "../section";
import Spacer, { VSpacerS } from "../Spacer";
import { FileInput } from ".";
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
  return (
    <ReflexContainer orientation="vertical">
      <ReflexElement className="flex h-full flex-col" minSize={300}>
        <SectionHeader title={t.common.inputTitle}>
          <div className="flex">
            <PasteButton onClick={setInput} />
            <Spacer x={6} />
            <FileInput onFileRead={setInput} />
            <Spacer x={6} />
            <ClearButton onClick={() => setInput("")} />
          </div>
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
      <ReflexSplitter
        style={{
          width: "10px",
          border: "none",
          background: "transparent",
          height: "98%",
        }}
      />
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
  );
};

export default SplitEditor;
