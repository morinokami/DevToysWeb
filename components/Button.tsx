interface ButtonProps {
  icon: React.VFC;
  text?: string;
  onClick?: () => void;
}

const Button: React.VFC<ButtonProps> = ({ icon: Icon, text, onClick }) => {
  return (
    <button
      className="hover:bg-light-10 rounded border border-gray-200 bg-light-20 py-2 px-3 dark:border-none dark:bg-dark-30 hover:dark:bg-dark-20"
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
