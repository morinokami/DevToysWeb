import { IconContext } from "react-icons";
import { FaAngleDown, FaAngleUp, FaBeer } from "react-icons/fa";

export const IconBeerMini: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: "14" }}>
      <FaBeer />
    </IconContext.Provider>
  );
};

export const IconBeer: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: "72" }}>
      <FaBeer />
    </IconContext.Provider>
  );
};

export const AngleUp: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: "14" }}>
      <FaAngleUp />
    </IconContext.Provider>
  );
};

export const AngleDown: React.VFC = () => {
  return (
    <IconContext.Provider value={{ size: "14" }}>
      <FaAngleDown />
    </IconContext.Provider>
  );
};
