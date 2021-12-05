import React from 'react';
// import {StyledSectionOneDetails} from "../../sections/SectionFour";
// import {StyledSectionOneP, StyledSectionSubtitle} from "../../components/typography/Paragraph";
// import {StyledCWCard} from "../../sections/CWCard";
import styled from 'styled-components';

export const StyledSectionLightP = styled.p`
  color: var(--ui-color-accent);
  font-weight: 600;
  font-family: Nunito;
  font-style: normal;
  text-align: center;
`;

export function SectionOneImage({ selectedArticle }) {
  return (
    <div
      style={{
        background: `url(${selectedArticle.image})`,
        width: '100%',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
      }}
    ></div>
  );
}
