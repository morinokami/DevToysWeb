import React from "react";

import { VSpacerS } from "../Spacer";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";

interface SectionConfigurationProps {
  title?: string;
}

const SectionConfiguration: React.FC<SectionConfigurationProps> = ({
  title,
  children,
}) => {
  return (
    <SectionContainer>
      {title ? <SectionHeader title={title} /> : null}
      {React.Children.map(children, (child) => {
        return (
          <>
            <VSpacerS />
            {child}
          </>
        );
      })}
    </SectionContainer>
  );
};

export default SectionConfiguration;
