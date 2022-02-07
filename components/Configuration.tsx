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
    <div className="flex items-center bg-gray-200 dark:bg-dark-3">
      <div>
        <Icon />
      </div>
      <div className="ml-2 grow">
        <div className="text-sm">{title}</div>
        {subtitle && (
          <div className="pt-1 text-xs text-gray-400">{subtitle}</div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Configuration;
