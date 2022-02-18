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
