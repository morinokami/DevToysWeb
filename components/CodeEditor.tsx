import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";

interface CodeEditorProps {
  height: string;
  value: string;
  language: "json" | "sql" | "xml" | "yaml";
  onChange?: (value: string | undefined) => void;
  readOnly?: boolean;
}

const CodeEditor: React.VFC<CodeEditorProps> = ({
  height,
  value,
  language,
  onChange,
  readOnly,
}) => {
  const { theme } = useTheme();

  return (
    <Editor
      height={height}
      defaultLanguage={language}
      defaultValue=""
      value={value}
      onChange={onChange}
      language={language}
      theme={theme === "dark" ? "vs-dark" : "light"}
      options={{
        minimap: {
          enabled: false,
        },
        readOnly: readOnly,
      }}
    />
  );
};

export default CodeEditor;
