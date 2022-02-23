interface ConfigurationProps {
  icon: React.VFC;
  title: string;
  subtitle?: string;
}

const Configuration: React.FC<ConfigurationProps> = ({
  icon: Icon,
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="flex h-16 items-center rounded border border-light-40 bg-light-10 px-4 dark:border-none dark:bg-dark-30">
      <div className="pr-4">
        <Icon />
      </div>
      <div className="mx-2 grow">
        <div className="text-sm">{title}</div>
        {subtitle && <div className="text-xs text-dark-10">{subtitle}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Configuration;
