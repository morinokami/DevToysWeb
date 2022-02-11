import CopyToClipboard from "react-copy-to-clipboard";

import { IconCopy } from "../data/icon";
import Button from "./Button";

interface CopyButtonProps {
  text: string;
  showTitle?: boolean;
}

const CopyButton: React.VFC<CopyButtonProps> = ({ text, showTitle }) => {
  return (
    <CopyToClipboard text={text}>
      <Button
        icon={IconCopy}
        {...(showTitle && { title: "Copy" })}
        {...(!showTitle && { text: "Copy" })}
      />
    </CopyToClipboard>
  );
};

export default CopyButton;
