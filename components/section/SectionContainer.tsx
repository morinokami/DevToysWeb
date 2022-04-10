import { PropsWithChildren } from "react";

interface SectionContainerProps {
  className?: string;
}

const SectionContainer: React.FC<PropsWithChildren<SectionContainerProps>> = ({
  className,
  children,
}) => {
  return <div {...{ className }}>{children}</div>;
};

export default SectionContainer;
