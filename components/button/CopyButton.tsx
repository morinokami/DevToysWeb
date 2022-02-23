import { IconCopy } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import Button from "./Button";

interface CopyButtonProps {
  text: string;
  showTitle?: boolean;
}

const CopyButton: React.VFC<CopyButtonProps> = ({ text, showTitle }) => {
  const { t } = useLocale();

  return (
    <Button
      icon={IconCopy}
      {...(!showTitle && { text: t.common.copyTitle })}
      {...(showTitle && { title: t.common.copyTitle })}
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
