import Spacer from "./Spacer";

interface SelectionIndicatorProps {
  selected: boolean;
}

const SelectionIndicator: React.VFC<SelectionIndicatorProps> = ({
  selected,
}) => {
  return selected ? (
    <>
      <div className="dark:border-l-3 h-4 border-l-[3px] border-blue-400" />
      <Spacer x={12} />
    </>
  ) : (
    <Spacer x={15} />
  );
};

export default SelectionIndicator;
