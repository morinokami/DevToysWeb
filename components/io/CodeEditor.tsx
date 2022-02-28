import Editor, { EditorProps, loader } from "@monaco-editor/react";
import { useTheme } from "next-themes";

import { editorSettings } from "../../data/localStorageKeys";
import { useLocalStorage } from "../../hooks/useLocalStorage";

loader.config({ paths: { vs: "/vs" } });

export type LANGUAGE = "json" | "sql" | "xml" | "yaml" | "markdown";

interface CodeEditorProps {
  height: string;
  value: string;
  language: LANGUAGE;
  onMount?: EditorProps["onMount"];
  onChange?: (value: string | undefined) => void;
  readOnly?: boolean;
}

const CodeEditor: React.VFC<CodeEditorProps> = ({
  height,
  value,
  language,
  onMount,
  onChange,
  readOnly,
}) => {
  const { theme } = useTheme();

  const [wrapWord] = useLocalStorage(
    editorSettings.wrapWord.key,
    editorSettings.wrapWord.default
  );
  const [lineNumber] = useLocalStorage(
    editorSettings.lineNumber.key,
    editorSettings.lineNumber.default
  );
  const [highlight] = useLocalStorage(
    editorSettings.highlightCurrentLine.key,
    editorSettings.highlightCurrentLine.default
  );
  const [renderWhiteSpace] = useLocalStorage(
    editorSettings.renderWhiteSpace.key,
    editorSettings.renderWhiteSpace.default
  );

  return (
    <Editor
      className="border border-light-40 dark:border-none"
      height={height}
      defaultLanguage={language}
      defaultValue=""
      value={value}
      onMount={onMount}
      onChange={onChange}
      language={language}
      theme={theme === "dark" ? "vs-dark" : "light"}
      options={{
        wordWrap: wrapWord ? "on" : "off",
        lineNumbers: lineNumber ? "on" : "off",
        renderLineHighlight: highlight ? "all" : "none",
        renderWhitespace: renderWhiteSpace ? "all" : "none",
        minimap: {
          enabled: false,
        },
        readOnly: readOnly,
      }}
    />
  );
};

export default CodeEditor;
