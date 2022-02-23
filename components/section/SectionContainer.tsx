interface SectionContainerProps {
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  className,
  children,
}) => {
  return <div {...{ className }}>{children}</div>;
};

export default SectionContainer;
