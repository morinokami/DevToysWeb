interface SpacerProps {
  x?: number;
  y?: number;
}

const Spacer: React.VFC<SpacerProps> = ({ x, y }) => {
  return <div style={{ width: x, height: y }} />;
};

export default Spacer;
