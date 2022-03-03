import { IconContext } from "react-icons";
import { BsFileZip, BsTextIndentLeft } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import {
  MdContentPaste,
  MdFingerprint,
  MdHorizontalRule,
  MdLanguage,
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
  VscClose,
  VscCode,
  VscCopy,
  VscDatabase,
  VscEdit,
  VscFile,
  VscFileBinary,
  VscHome,
  VscJson,
  VscListOrdered,
  VscMarkdown,
  VscNewFile,
  VscNote,
  VscPaintcan,
  VscRegex,
  VscSearch,
  VscSettings,
  VscSettingsGear,
  VscSymbolNumeric,
  VscTextSize,
  VscWordWrap,
} from "react-icons/vsc";

const ICON_SIZE_SMALL = "14";
const ICON_SIZE_MEDIUM = "20";
const ICON_SIZE_LARGE = "54";

export interface IconProps {
  large?: boolean;
}

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
export const IconDelete = generateIconMedium(VscClose);
export const IconUpload = generateIconMedium(VscFile);
export const IconCase = generateIconMedium(VscCaseSensitive);
export const IconIndentation = generateIconMedium(MdSpaceBar);
export const IconLanguage = generateIconMedium(VscCode);
export const IconHyphen = generateIconMedium(MdHorizontalRule);
export const IconConversion = generateIconMedium(VscArrowSwap);
export const IconVersion = generateIconMedium(VscSettings);
export const IconType = generateIconMedium(VscNote);
export const IconI18n = generateIconMedium(MdLanguage);
export const IconTheme = generateIconMedium(VscPaintcan);
export const IconWrap = generateIconMedium(VscWordWrap);
export const IconLineNumber = generateIconMedium(VscListOrdered);
export const IconHightlight = generateIconMedium(VscEdit);

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
export const IconSearch = generateIcon(VscSearch);
export const IconClearSearch = generateIcon(VscClose);

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
export const IconChecksum = generateIcon(VscNewFile);

// Text

export const IconText = generateIcon(VscCaseSensitive);
export const IconRegexTester = generateIcon(VscRegex);
export const IconMarkdownPreview = generateIcon(VscMarkdown);
