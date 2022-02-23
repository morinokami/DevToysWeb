import { IconPaste } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import Button from "./Button";

interface PasteButtonProps {
  onClick: (value: string) => void;
}

const PasteButton: React.VFC<PasteButtonProps> = ({ onClick }) => {
  const { t } = useLocale();

  return (
    <Button
      icon={IconPaste}
      text={t.common.pasteTitle}
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
