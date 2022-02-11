import { IconDelete } from "../data/icon";
import Button from "./Button";

interface ClearButtonProps {
  setter: (text: string) => void;
}

const ClearButton: React.VFC<ClearButtonProps> = ({ setter }) => {
  return <Button icon={IconDelete} title="Clear" onClick={() => setter("")} />;
};

export default ClearButton;
