import Spacer from "./Spacer";

interface InputProps {
  value: string;
  id?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, id, onChange, children }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="text"
        className="grow rounded border border-gray-200 border-b-gray-400 bg-light-10 px-3 pt-[0.45rem] pb-[0.35rem] text-sm focus:border-b-blue-30 focus:outline-none dark:border-x-0 dark:border-t-0 dark:border-b-2 dark:border-gray-500 dark:bg-dark-30 focus:dark:border-blue-30 focus:dark:bg-dark-50"
        value={value}
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
        readOnly={onChange ? false : true}
        spellCheck={false}
      />
      {children ? <Spacer x={8} /> : null}
      {children}
    </div>
  );
};

export default Input;
