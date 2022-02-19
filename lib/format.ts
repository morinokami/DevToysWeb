export const formatJson = (value: string, indent?: string) => {
  try {
    const json = JSON.parse(value);
    return JSON.stringify(json, null, indent);
  } catch {
    return "";
  }
};
