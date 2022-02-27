import { useRef } from "react";

import { IconUpload } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import { Button } from "../button";

interface FileInputButtonProps {
  onFileRead: (value: string) => void;
  accept?: string;
}

const FileInputButton: React.VFC<FileInputButtonProps> = ({
  onFileRead,
  accept,
}) => {
  const { t } = useLocale();

  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 1) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result && typeof result === "string") {
          onFileRead(result);
        }
      };
      reader.readAsText(e.target.files[0]);
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
      <Button
        icon={IconUpload}
        title={t.common.openFiletitle}
        onClick={onClick}
      />
    </>
  );
};

export default FileInputButton;
