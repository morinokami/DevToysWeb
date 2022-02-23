import React from "react";

import { VSpacerS } from "../Spacer";
import SectionContainer from "./SectionContainer";

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
