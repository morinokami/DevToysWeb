import Spacer from "./Spacer";

interface InputProps {
  value: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, children }) => {
  return (
    <div className="flex items-center">
      <input
        className="grow rounded border-b-2 bg-gray-200 px-3 pt-[0.3rem] pb-[0.2rem] focus:outline-none dark:border-gray-500 dark:bg-dark-30 focus:dark:border-blue-500 focus:dark:bg-dark-50"
        type="text"
        value={value}
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
        readOnly={onChange ? false : true}
      />
      {children ? <Spacer x={8} /> : null}
      {children}
    </div>
  );
};

export default Input;
