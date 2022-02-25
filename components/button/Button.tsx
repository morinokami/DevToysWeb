interface ButtonProps {
  icon: React.VFC;
  text?: string;
  title?: string;
  onClick?: () => void;
}

const Button: React.VFC<ButtonProps> = ({
  icon: Icon,
  text,
  title,
  onClick,
}) => {
  return (
    <button
      className="rounded border border-light-40 bg-light-20 py-2 px-3 hover:bg-light-10 dark:border-none dark:bg-dark-30 hover:dark:bg-dark-20"
      title={title}
      onClick={onClick}
    >
      <div className="flex items-center">
        <Icon />
        {text && <div className="ml-1 translate-y-px text-sm">{text}</div>}
      </div>
    </button>
  );
};

export default Button;
