import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";

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
