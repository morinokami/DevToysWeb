import xmlFormatter from "xml-formatter";

export const formatJson = (value: string, indent?: string) => {
  try {
    const json = JSON.parse(value);
    return JSON.stringify(json, null, indent);
  } catch {
    return "";
  }
};

export const formatXml = (value: string, indent: string = "  ") => {
  try {
    return xmlFormatter(value, { indentation: indent, lineSeparator: "\n" });
  } catch {
    return "";
  }
};
