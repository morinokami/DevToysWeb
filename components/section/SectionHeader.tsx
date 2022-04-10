import { PropsWithChildren } from "react";

interface SectionHeaderProps {
  title: string;
  label?: string;
}

const SectionHeader: React.FC<PropsWithChildren<SectionHeaderProps>> = ({
  title,
  label,
  children,
}) => {
  return (
    <div className="flex items-center justify-between lg:items-baseline">
      <h2 className="text-sm">
        <label htmlFor={label}>{title}</label>
      </h2>
      <div className="flex">{children}</div>
    </div>
  );
};

export default SectionHeader;
