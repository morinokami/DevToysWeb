import React from "react";

import SectionContainer from "./SectionContainer";
import { VSpacerS } from "./Spacer";

interface SectionMainProps {
  className?: string;
}

const SectionMain: React.FC<SectionMainProps> = ({ className, children }) => {
  return (
    <SectionContainer {...{ className }}>
      {React.Children.map(children, (child, index) => {
        return index === 0 ? (
          child
        ) : (
          <>
            <VSpacerS />
            {child}
          </>
        );
      })}
    </SectionContainer>
  );
};

export default SectionMain;
