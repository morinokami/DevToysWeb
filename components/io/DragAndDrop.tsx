import { PropsWithChildren } from "react";
import { useDropzone } from "react-dropzone";

interface DragAndDropProps {
  onDrop: (files: File[]) => void;
}

const DragAndDrop: React.FC<PropsWithChildren<DragAndDropProps>> = ({
  onDrop,
  children,
}) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
  });

  if (acceptedFiles.length > 0) {
    onDrop(acceptedFiles);
  }

  return (
    <>
      <div
        {...getRootProps({
          className:
            "dropzone flex cursor-default flex-col items-center rounded border-2 border-dashed border-dark-10 p-6 text-sm",
        })}
      >
        <input {...getInputProps()} />
        {children}
      </div>
    </>
  );
};

export default DragAndDrop;
