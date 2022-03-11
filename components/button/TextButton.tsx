interface TextButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const TextButton: React.VFC<TextButtonProps> = ({
  text,
  onClick,
  className = "rounded border border-light-40 bg-light-20 hover:bg-light-10 dark:border-none dark:bg-dark-30 hover:dark:bg-dark-20",
}) => {
  return (
    // TODO: Update color
    <button className={` py-2 px-3 ${className}`} onClick={onClick}>
      <div className="flex items-center">
        <div className="translate-y-px text-sm">{text}</div>
      </div>
    </button>
  );
};

export default TextButton;
