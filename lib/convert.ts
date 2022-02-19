import yaml from "js-yaml";

// JSON <> YAML

export const toYaml = (value: string, indent: number) => {
  try {
    return yaml.dump(JSON.parse(value), { indent });
  } catch {
    return "";
  }
};

export const toJson = (value: string, indent: number) => {
  try {
    return JSON.stringify(yaml.load(value), null, indent);
  } catch {
    return "";
  }
};

// Nuber Base

const isDecimalString = (value: string) => {
  return /^\d+$/.test(value);
};

const isBinaryString = (value: string) => {
  return /^[01]+$/.test(value);
};

const isOctalString = (value: string) => {
  return /^[0-7]+$/.test(value);
};

const isHexString = (value: string) => {
  return /^[0-9a-f]+$/i.test(value);
};

export const isValidNumber = (value: string, radix: number) => {
  switch (radix) {
    case 10:
      return isDecimalString(value);
    case 2:
      return isBinaryString(value);
    case 8:
      return isOctalString(value);
    case 16:
      return isHexString(value);
    default:
      return false;
  }
};

export const convertRadix = (value: string, from: number, to: number) => {
  if (!isValidNumber(value, from)) {
    return "";
  } else if (from === to) {
    return value;
  }

  if (from === 10) {
    if (to === 2) {
      return parseInt(value, 10).toString(2);
    } else if (to === 8) {
      return parseInt(value, 10).toString(8);
    } else if (to === 16) {
      return parseInt(value, 10).toString(16);
    }
  } else if (from === 2) {
    if (to === 10) {
      return parseInt(value, 2).toString(10);
    } else if (to === 8) {
      return parseInt(value, 2).toString(8);
    } else if (to === 16) {
      return parseInt(value, 2).toString(16);
    }
  } else if (from === 8) {
    if (to === 10) {
      return parseInt(value, 8).toString(10);
    } else if (to === 2) {
      return parseInt(value, 8).toString(2);
    } else if (to === 16) {
      return parseInt(value, 8).toString(16);
    }
  } else if (from === 16) {
    if (to === 10) {
      return parseInt(value, 16).toString(10);
    } else if (to === 2) {
      return parseInt(value, 16).toString(2);
    } else if (to === 8) {
      return parseInt(value, 16).toString(8);
    }
  }

  return "";
};
