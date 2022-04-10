import { useEffect, useRef, useState } from "react";
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

// TODO: Responsive layout
const MarkdownPreview: React.VFC<MarkdownPreviewProps> = ({
  input,
  setInput,
  output,
  theme,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editorHeight, setEditorHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (editorRef.current) {
        setEditorHeight(editorRef.current.clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // TODO: Remove ts-ignores
    // @ts-ignore
    <ReflexContainer className="max-w-full" orientation="vertical">
      {/* @ts-ignore */}
      <ReflexElement className="flex h-full flex-col" minSize={300}>
        <SectionHeader title="Markdown">
          <div className="flex">
            <PasteButton onClick={setInput} />
            <Spacer x={6} />
            <ClearButton onClick={() => setInput("")} />
          </div>
        </SectionHeader>
        <VSpacerS />
        <div className="grow" ref={editorRef}>
          <CodeEditor
            height="98%"
            value={input}
            onMount={(editor) => {
              if (editor) {
                // TODO: better way to do this?
                setEditorHeight(editor.getContentHeight() + 15);
              }
            }}
            onChange={(value) => setInput(value ?? "")}
            language="markdown"
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
      {/* @ts-ignore */}
      <ReflexElement className="flex h-full flex-col" minSize={300}>
        <SectionHeader title={t.common.previewTitle}>
          <div className="flex">
            <CopyButton text={output} />
          </div>
        </SectionHeader>
        <VSpacerS />
        <div
          className={`markdown-body-${theme} border border-light-40 p-2 dark:border-none`}
          style={{
            // TODO: better way to do this?
            height: editorHeight - 13,
            overflow: "auto",
          }}
          dangerouslySetInnerHTML={{ __html: output }}
        />
      </ReflexElement>
    </ReflexContainer>
  );
};

export default MarkdownPreview;
