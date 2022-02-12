interface SpacerProps {
  x?: number;
  y?: number;
}

const Spacer: React.VFC<SpacerProps> = ({ x, y }) => {
  return <div style={{ width: x, height: y }} />;
};

export default Spacer;

export const VSpacerS: React.VFC = () => <div style={{ height: 6 }} />;
export const VSpacerM: React.VFC = () => <div style={{ height: 12 }} />;
export const VSpacerL: React.VFC = () => <div style={{ height: 24 }} />;
