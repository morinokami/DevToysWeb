interface TextAreaProps {
  value: string;
  onChange?: (value: string) => void;
  rows?: number;
}

const TextArea: React.VFC<TextAreaProps> = ({ value, onChange, rows }) => {
  return (
    <div className="flex items-center">
      <textarea
        className="grow resize-none rounded border border-gray-200 border-b-gray-400 bg-light-10 px-3 pt-[0.3rem] pb-[0.2rem] focus:border-b-blue-500 focus:outline-none dark:border-x-0 dark:border-t-0 dark:border-b-2 dark:border-gray-500 dark:bg-dark-30 focus:dark:border-blue-500 focus:dark:bg-dark-50"
        rows={rows ?? 10}
        value={value}
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
      />
    </div>
  );
};

export default TextArea;
