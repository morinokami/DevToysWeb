interface SectionHeaderProps {
  title: string;
  label?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  label,
  children,
}) => {
  return (
    <div className="flex items-center justify-between lg:items-baseline">
      <h2 className="text-sm">
        <label htmlFor={label}>{title}</label>
      </h2>
      {children}
    </div>
  );
};

export default SectionHeader;
