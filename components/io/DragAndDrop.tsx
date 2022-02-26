import { useDropzone } from "react-dropzone";

interface DragAndDropProps {}

const DragAndDrop: React.VFC<DragAndDropProps> = ({}) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
  });

  // TODO: if length > 1, do nothing
  //       else read file
  acceptedFiles.forEach((file) => console.log(file));

  return (
    <div className="rounded border-2 border-dashed border-dark-10">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag &amp; drop any file here</p>
      </div>
    </div>
  );
};

export default DragAndDrop;
