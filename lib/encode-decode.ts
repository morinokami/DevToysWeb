import * as base64 from "byte-base64";
import pako from "pako";

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

export const compress = (value: string) => {
  const encoder = new TextEncoder();
  const compressed = pako.gzip(encoder.encode(value));
  return base64.bytesToBase64(compressed);
};

export const decompress = (value: string) => {
  try {
    const decoder = new TextDecoder();
    const compressed = base64.base64ToBytes(value);
    return decoder.decode(pako.ungzip(compressed));
  } catch {
    return "";
  }
};
