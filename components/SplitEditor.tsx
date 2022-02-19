import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

import { t } from "../data/locales/en";
import ClearButton from "./ClearButton";
import CodeEditor from "./CodeEditor";
import CopyButton from "./CopyButton";
import PasteButton from "./PasteButton";
import SectionHeader from "./SectionHeader";
import Spacer, { VSpacerS } from "./Spacer";

interface SplitEditorProps {
  input: string;
  setInput: (value: string) => void;
  output: string;
  inputLanguage: "json" | "sql" | "xml" | "yaml";
  outputLanguage: "json" | "sql" | "xml" | "yaml";
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
      <ReflexElement minSize={200}>
        <div className="flex h-full flex-col">
          <SectionHeader title={t.common.inputTitle}>
            <div className="flex">
              <PasteButton onClick={setInput} />
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
      <ReflexElement minSize={200}>
        <div className="flex h-full flex-col">
          <SectionHeader title={t.common.outputTitle}>
            <div className="flex">
              <CopyButton text={output} />
            </div>
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
        </div>
      </ReflexElement>
    </ReflexContainer>
  );
};

export default SplitEditor;
