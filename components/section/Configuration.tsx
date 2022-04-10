import { PropsWithChildren } from "react";

interface ConfigurationProps {
  icon: React.VFC;
  title: string;
  desc?: string;
}

const Configuration: React.FC<PropsWithChildren<ConfigurationProps>> = ({
  icon: Icon,
  title,
  desc,
  children,
}) => {
  return (
    <div className="flex h-16 items-center rounded border border-light-40 bg-light-10 px-4 dark:border-none dark:bg-dark-30">
      <div className="pr-4">
        <Icon />
      </div>
      <div className="mx-2 grow">
        <div className="text-sm sm:break-all">{title}</div>
        {desc && <div className="text-xs text-dark-10 sm:hidden">{desc}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Configuration;
