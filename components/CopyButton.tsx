import { IconCopy } from "../data/icon";
import Button from "./Button";

interface CopyButtonProps {
  text: string;
  showTitle?: boolean;
}

const CopyButton: React.VFC<CopyButtonProps> = ({ text, showTitle }) => {
  return (
    <Button
      icon={IconCopy}
      {...(!showTitle && { text: "Copy" })}
      {...(showTitle && { title: "Copy" })}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch (e) {
          if (e instanceof DOMException) {
            window.alert(e.message);
          }
        }
      }}
    />
  );
};

export default CopyButton;
