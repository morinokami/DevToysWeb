interface TextAreaProps {
  value: string;
  onChange?: (value: string) => void;
  rows?: number;
}

const TextArea: React.VFC<TextAreaProps> = ({ value, onChange, rows }) => {
  return (
    <div className="flex items-center">
      <textarea
        className="grow rounded border border-gray-200 border-b-gray-400 bg-light-10 px-3 pt-[0.45rem] pb-[0.35rem] text-sm focus:border-b-blue-30 focus:outline-none dark:border-x-0 dark:border-t-0 dark:border-b-2 dark:border-gray-500 dark:bg-dark-30 focus:dark:border-blue-30 focus:dark:bg-dark-50"
        rows={rows ?? 10}
        value={value}
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
        readOnly={!onChange}
        spellCheck={false}
      />
    </div>
  );
};

export default TextArea;
