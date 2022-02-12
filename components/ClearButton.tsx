import { IconDelete } from "../data/icon";
import Button from "./Button";

interface ClearButtonProps {
  onClick: () => void;
}

const ClearButton: React.VFC<ClearButtonProps> = ({ onClick }) => {
  return <Button icon={IconDelete} title="Clear" onClick={onClick} />;
};

export default ClearButton;
