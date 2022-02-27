import { useRef } from "react";

interface FileInputTextProps {
  text: string;
  onFileRead: (value: FileList) => void;
  accept?: string;
}

const FileInputText: React.VFC<FileInputTextProps> = ({
  text,
  onFileRead,
  accept,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFileRead(e.target.files);
    }
    e.target.value = "";
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        onChange={onFileInputChange}
        hidden
        {...(accept ? { accept } : {})}
      />
      <div
        className="cursor-pointer rounded py-2 px-3 text-blue-30 underline hover:bg-light-30 dark:hover:bg-dark-30"
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
};

export default FileInputText;
