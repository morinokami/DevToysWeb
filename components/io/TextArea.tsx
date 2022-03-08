type CursorPosition = {
  line: number;
  column: number;
  position: number;
};

interface TextAreaProps {
  value: string;
  id?: string;
  onChange?: (value: string) => void;
  onCursorMove?: (cursorPosition: CursorPosition) => void;
}

const TextArea: React.VFC<TextAreaProps> = ({
  value,
  id,
  onChange,
  onCursorMove,
}) => {
  return (
    <textarea
      id={id}
      className="min-h-[150px] w-full grow resize-none rounded border border-light-40 border-b-gray-400 bg-light-10 px-3 pt-[0.45rem] pb-[0.35rem] text-sm focus:border-b-blue-30 focus:outline-none dark:border-x-0 dark:border-t-0 dark:border-b-2 dark:border-gray-500 dark:bg-dark-30 focus:dark:border-blue-30 focus:dark:bg-dark-50"
      value={value}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.value);
        }
      }}
      onKeyUp={(e) => {
        if (onCursorMove) {
          onCursorMove(
            getCursorPosition(value, e.currentTarget.selectionStart)
          );
        }
      }}
      onMouseUp={(e) => {
        if (onCursorMove) {
          onCursorMove(
            getCursorPosition(value, e.currentTarget.selectionStart)
          );
        }
      }}
      readOnly={!onChange}
      spellCheck={false}
    />
  );
};

export default TextArea;

const getCursorPosition = (text: string, selection: number): CursorPosition => {
  const lines = text.split("\n");
  const position = selection;
  for (let i = 0; i < lines.length; i++) {
    if (selection <= lines[i].length) {
      return {
        line: i,
        column: selection,
        position,
      };
    }
    selection -= lines[i].length + 1;
  }
  return {
    line: lines.length - 1,
    column: lines[lines.length - 1].length,
    position,
  };
};
