import { IconContext } from "react-icons";
import { BsFileZip, BsTextIndentLeft } from "react-icons/bs";
import { FaBeer, FaHtml5 } from "react-icons/fa";
import {
  MdContentPaste,
  MdDelete,
  MdFingerprint,
  MdHorizontalRule,
  MdOutlineLink,
  MdPrecisionManufacturing,
  MdShortText,
  MdSpaceBar,
  MdTransform,
  MdWater,
} from "react-icons/md";
import { SiJsonwebtokens } from "react-icons/si";
import {
  VscArrowSwap,
  VscCaseSensitive,
  VscChevronDown,
  VscChevronUp,
  VscCode,
  VscCopy,
  VscDatabase,
  VscFile,
  VscFileBinary,
  VscHome,
  VscJson,
  VscSettings,
  VscSettingsGear,
  VscSymbolNumeric,
  VscTextSize,
} from "react-icons/vsc";

const ICON_SIZE_SMALL = "14";
const ICON_SIZE_MEDIUM = "20";
const ICON_SIZE_LARGE = "54";

export interface IconProps {
  large?: boolean;
}

// TODO: Delete
export const IconBeerMini: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <FaBeer />
    </IconContext.Provider>
  );
};
// TODO: Delete
export const IconBeer: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: "54" }}>
      <FaBeer />
    </IconContext.Provider>
  );
};

const generateIconMedium = (Icon: React.VFC) => {
  const IconMedium = () => {
    return (
      <IconContext.Provider value={{ size: ICON_SIZE_MEDIUM }}>
        <Icon />
      </IconContext.Provider>
    );
  };
  return IconMedium;
};
export const IconCopy = generateIconMedium(VscCopy);
export const IconPaste = generateIconMedium(MdContentPaste);
export const IconDelete = generateIconMedium(MdDelete);
export const IconUpload = generateIconMedium(VscFile);
export const IconCase = generateIconMedium(VscCaseSensitive);
export const IconIndentation = generateIconMedium(MdSpaceBar);
export const IconLanguage = generateIconMedium(VscCode);
export const IconHyphen = generateIconMedium(MdHorizontalRule);
export const IconConversion = generateIconMedium(VscArrowSwap);
export const IconVersion = generateIconMedium(VscSettings);

// Sidebar Icons

const generateIcon = (Icon: React.VFC) => {
  const IconComponent = ({ large }: IconProps = { large: false }) => {
    return (
      <IconContext.Provider
        value={{ size: large ? ICON_SIZE_LARGE : ICON_SIZE_SMALL }}
      >
        <Icon />
      </IconContext.Provider>
    );
  };
  return IconComponent;
};
export const IconChevronUp = generateIcon(VscChevronUp);
export const IconChevronDown = generateIcon(VscChevronDown);
export const IconAllTools = generateIcon(VscHome);
export const IconSettings = generateIcon(VscSettingsGear);

// Converters

export const IconConverters = generateIcon(MdTransform);
export const IconNumberBase = generateIcon(VscSymbolNumeric);

// Encoders / Decoders

export const IconEncodersDecoders = generateIcon(VscFileBinary);
export const IconHtml = generateIcon(FaHtml5);
export const IconUrl = generateIcon(MdOutlineLink);
export const IconBase64 = generateIcon(MdShortText);
export const IconGZip = generateIcon(BsFileZip);
export const IconJWT = generateIcon(SiJsonwebtokens);

// Formatters

export const IconFormatters = generateIcon(BsTextIndentLeft);
export const IconJson = generateIcon(VscJson);
export const IconSql = generateIcon(VscDatabase);
export const IconXml = generateIcon(VscCode);

// Generators

export const IconGenerators = generateIcon(MdPrecisionManufacturing);
export const IconHash = generateIcon(MdFingerprint);
export const IconUuid = generateIcon(MdWater);
export const IconLoremIpsum = generateIcon(VscTextSize);
