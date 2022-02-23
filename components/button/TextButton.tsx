interface TextButtonProps {
  text: string;
  onClick: () => void;
}

const TextButton: React.VFC<TextButtonProps> = ({ text, onClick }) => {
  return (
    // TODO: Update color
    <button
      className="rounded bg-blue-30 py-2 px-3 hover:bg-blue-20"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="translate-y-px text-sm">{text}</div>
      </div>
    </button>
  );
};

export default TextButton;
