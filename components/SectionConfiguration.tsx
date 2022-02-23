import React from "react";

import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import { VSpacerS } from "./Spacer";

interface SectionConfigurationProps {
  title: string;
}

const SectionConfiguration: React.FC<SectionConfigurationProps> = ({
  title,
  children,
}) => {
  return (
    <SectionContainer>
      <SectionHeader title={title} />
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
