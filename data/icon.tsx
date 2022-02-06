import { IconContext } from "react-icons";
import { BsFileZip, BsTextIndentLeft } from "react-icons/bs";
import { FaBeer, FaHtml5 } from "react-icons/fa";
import { MdFingerprint, MdOutlineLink, MdTransform } from "react-icons/md";
import {
  VscChevronDown,
  VscChevronUp,
  VscCode,
  VscDatabase,
  VscFileBinary,
  VscHome,
  VscJson,
  VscSettingsGear,
} from "react-icons/vsc";

const ICON_SIZE_SMALL = "14";

export const IconBeerMini: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <FaBeer />
    </IconContext.Provider>
  );
};

export const IconBeer: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: "54" }}>
      <FaBeer />
    </IconContext.Provider>
  );
};

// Sidebar Icons

export const IconChevronUp: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <VscChevronUp />
    </IconContext.Provider>
  );
};

export const IconChevronDown: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <VscChevronDown />
    </IconContext.Provider>
  );
};

export const IconAllTools: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <VscHome />
    </IconContext.Provider>
  );
};

export const IconSettings: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <VscSettingsGear />
    </IconContext.Provider>
  );
};

// Converters

export const IconConverters: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <MdTransform />
    </IconContext.Provider>
  );
};

// Encoders / Decoders

export const IconEncodersDecoders: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <VscFileBinary />
    </IconContext.Provider>
  );
};

export const IconHtml: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <FaHtml5 />
    </IconContext.Provider>
  );
};

export const IconUrl: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <MdOutlineLink />
    </IconContext.Provider>
  );
};

export const IconGZip: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <BsFileZip />
    </IconContext.Provider>
  );
};

// Formatters

export const IconFormatters: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <BsTextIndentLeft />
    </IconContext.Provider>
  );
};

export const IconJson: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <VscJson />
    </IconContext.Provider>
  );
};

export const IconSql: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <VscDatabase />
    </IconContext.Provider>
  );
};

export const IconXml: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <VscCode />
    </IconContext.Provider>
  );
};

// Generators

export const IconHash: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: ICON_SIZE_SMALL }}>
      <MdFingerprint />
    </IconContext.Provider>
  );
};
