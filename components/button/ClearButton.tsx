import { IconDelete } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import Button from "./Button";

interface ClearButtonProps {
  onClick: () => void;
}

const ClearButton: React.VFC<ClearButtonProps> = ({ onClick }) => {
  const { t } = useLocale();

  return (
    <Button icon={IconDelete} title={t.common.clearTitle} onClick={onClick} />
  );
};

export default ClearButton;
