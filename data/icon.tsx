import { IconContext } from "react-icons";
import { BsFileZip, BsTextIndentLeft } from "react-icons/bs";
import { FaBeer, FaHtml5 } from "react-icons/fa";
import {
  MdContentPaste,
  MdDelete,
  MdFingerprint,
  MdOutlineLink,
  MdTransform,
} from "react-icons/md";
import {
  VscChevronDown,
  VscChevronUp,
  VscCode,
  VscCopy,
  VscDatabase,
  VscFileBinary,
  VscHome,
  VscJson,
  VscSettingsGear,
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

// Sidebar Icons

const generateIcon = (Icon: React.VFC) => {
  const IconMedium = ({ large }: IconProps = { large: false }) => {
    return (
      <IconContext.Provider
        value={{ size: large ? ICON_SIZE_LARGE : ICON_SIZE_SMALL }}
      >
        <Icon />
      </IconContext.Provider>
    );
  };
  return IconMedium;
};
export const IconChevronUp = generateIcon(VscChevronUp);
export const IconChevronDown = generateIcon(VscChevronDown);
export const IconAllTools = generateIcon(VscHome);
export const IconSettings = generateIcon(VscSettingsGear);

// Converters

export const IconConverters = generateIcon(MdTransform);

// Encoders / Decoders

export const IconEncodersDecoders = generateIcon(VscFileBinary);
export const IconHtml = generateIcon(FaHtml5);
export const IconUrl = generateIcon(MdOutlineLink);
export const IconGZip = generateIcon(BsFileZip);

// Formatters

export const IconFormatters = generateIcon(BsTextIndentLeft);
export const IconJson = generateIcon(VscJson);
export const IconSql = generateIcon(VscDatabase);
export const IconXml = generateIcon(VscCode);

// Generators

export const IconHash = generateIcon(MdFingerprint);
