interface ButtonProps {
  icon: React.VFC;
  text?: string;
  onClick?: () => void;
}

const Button: React.VFC<ButtonProps> = ({ icon: Icon, text, onClick }) => {
  return (
    <button
      className="rounded bg-gray-100 py-2 px-3 hover:bg-gray-200 dark:bg-dark-3 dark:hover:bg-dark-2"
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
