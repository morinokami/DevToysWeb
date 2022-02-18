export const formatJson = (value: string, indent?: string) => {
  const json = JSON.parse(value);
  return JSON.stringify(json, null, indent);
};
