import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

import { t } from "../../data/locales/en";
import { ClearButton, CopyButton, PasteButton } from "../button";
import { SectionHeader } from "../section";
import Spacer, { VSpacerS } from "../Spacer";
import { CodeEditor } from ".";

interface MarkdownPreviewProps {
  input: string;
  setInput: (value: string) => void;
  output: string;
  theme: string;
}

const MarkdownPreview: React.VFC<MarkdownPreviewProps> = ({
  input,
  setInput,
  output,
  theme,
}) => {
  return (
    <ReflexContainer orientation="vertical">
      <ReflexElement minSize={200}>
        <div className="flex h-full flex-col">
          <SectionHeader title="Markdown">
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
              language="markdown"
            />
          </div>
        </div>
      </ReflexElement>
      <ReflexSplitter
        style={{ width: "10px", border: "none", background: "transparent" }}
      />
      {/* TODO: Fix overflow */}
      {/* TODO: Apply theme */}
      <ReflexElement minSize={200}>
        <div className="flex h-full flex-col">
          <SectionHeader title={t.common.previewTitle}>
            <div className="flex">
              <CopyButton text={output} />
            </div>
          </SectionHeader>
          <VSpacerS />
          <div
            className={`markdown-body relative p-2`}
            style={{ height: "90%" }}
            dangerouslySetInnerHTML={{ __html: output }}
          />
        </div>
      </ReflexElement>
    </ReflexContainer>
  );
};

export default MarkdownPreview;
