import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  height: string;
  value: string;
  language: "json" | "sql" | "xml" | "yaml";
  onChange?: (value: string | undefined) => void;
  theme?: string;
  readOnly?: boolean;
}

const CodeEditorProps: React.VFC<CodeEditorProps> = ({
  height,
  value,
  language,
  onChange,
  theme,
  readOnly,
}) => {
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

export default CodeEditorProps;
