import { useDropzone } from "react-dropzone";

interface DragAndDropProps {
  onDrop: (files: File[]) => void;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ onDrop, children }) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
  });

  if (acceptedFiles.length > 0) {
    onDrop(acceptedFiles);
  }

  return (
    <div className="">
      <div
        {...getRootProps({
          className:
            "dropzone flex justify-center rounded border-2 border-dashed border-dark-10 p-4",
        })}
      >
        <input {...getInputProps()} />
        {children}
      </div>
    </div>
  );
};

export default DragAndDrop;
