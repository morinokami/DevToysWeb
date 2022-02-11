import { IconPaste } from "../data/icon";
import Button from "./Button";

interface PasteButtonProps {
  onClick: (text: string) => void;
}

const PasteButton: React.VFC<PasteButtonProps> = ({ onClick }) => {
  return (
    <Button
      icon={IconPaste}
      text="Paste"
      onClick={async () => {
        try {
          const text = await navigator.clipboard.readText();
          onClick(text);
        } catch (e) {
          if (e instanceof DOMException) {
            window.alert(e.message);
          }
        }
      }}
    />
  );
};

export default PasteButton;
