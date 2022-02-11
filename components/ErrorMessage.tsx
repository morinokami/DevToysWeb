interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.VFC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex h-12 items-center rounded bg-yellow-200 dark:bg-yellow-700 dark:bg-opacity-50">
      <div className="mx-4 h-4 w-4 rounded-full bg-yellow-400 text-center text-xs leading-[18px] dark:text-black">
        !
      </div>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ErrorMessage;
