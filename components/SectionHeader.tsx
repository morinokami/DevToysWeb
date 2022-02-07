interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, children }) => {
  return (
    <div className="flex justify-between lg:items-baseline">
      <h2 className="text-sm">{title}</h2>
      {children}
    </div>
  );
};

export default SectionHeader;
