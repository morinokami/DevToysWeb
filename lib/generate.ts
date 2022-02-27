import { SHA384 as sha384 } from "crypto-js";
import WordArray from "crypto-js/lib-typedarrays";
import md5 from "crypto-js/md5";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";
import sha512 from "crypto-js/sha512";
import { v1 as uuidv1, v4 as uuidv4 } from "uuid";

export const generateUuid = (
  version: number,
  hyphenate: boolean,
  uppercase: boolean
) => {
  let uuid = version === 1 ? uuidv1() : uuidv4();
  if (!hyphenate) {
    uuid = uuid.replace(/-/g, "");
  }
  if (uppercase) {
    uuid = uuid.toUpperCase();
  } else {
    uuid = uuid.toLowerCase();
  }

  return uuid;
};

export const generateChecksum = (
  buf: ArrayBuffer,
  algorithm: string,
  uppercase: boolean
) => {
  try {
    // TODO: Fix this
    // @ts-ignore
    const wordArray = WordArray.create(buf);
    let checksum = "";
    switch (algorithm) {
      case "md5":
        checksum = md5(wordArray).toString();
        break;
      case "sha1":
        checksum = sha1(wordArray).toString();
        break;
      case "sha256":
        checksum = sha256(wordArray).toString();
        break;
      case "sha384":
        checksum = sha384(wordArray).toString();
        break;
      case "sha512":
        checksum = sha512(wordArray).toString();
        break;
    }
    return uppercase ? checksum.toUpperCase() : checksum;
  } catch {
    return "";
  }
};
