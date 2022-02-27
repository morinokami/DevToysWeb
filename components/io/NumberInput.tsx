interface NumberInputProps {
  value: number | null;
  onChange: (value: number | null) => void;
  min: number;
  max: number;
}

const NumberInput: React.VFC<NumberInputProps> = ({
  value,
  onChange,
  min,
  max,
}) => {
  return (
    <input
      type="number"
      className="rounded border border-light-40 border-b-gray-400 bg-light-10 px-3 pt-[0.45rem] pb-[0.35rem] text-sm focus:border-b-blue-30 focus:outline-none dark:border-x-0 dark:border-t-0 dark:border-b-2 dark:border-gray-500 dark:bg-dark-20 focus:dark:border-blue-30 focus:dark:bg-dark-50"
      value={value ?? ""}
      onChange={(e) => {
        if (e.target.value === "") {
          onChange(null);
          return;
        }

        const value = parseInt(e.target.value);
        if (!isNaN(value) && min <= value && value <= max) {
          onChange(value);
        }
      }}
      onBlur={(e) => {
        if (e.target.value === "") {
          onChange(min);
        }
      }}
      {...(min && { min })}
      {...(max && { max })}
    />
  );
};

export default NumberInput;
