export const encodeUrl = (value: string) => {
  try {
    return encodeURIComponent(value);
  } catch {
    return "";
  }
};

export const decodeUrl = (value: string) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return "";
  }
};
