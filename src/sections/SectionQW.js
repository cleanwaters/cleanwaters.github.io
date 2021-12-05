import React from 'react';
import styled from 'styled-components';
import {
  StyledSection,
  StyledLayoutContainer,
} from '../components/styled-shared';
import { StyledSectionOneDetails } from './SectionFive';
import {
  StyledH34,
  StyledP14,
  StyledP20,
} from '../components/typography/Paragraph';

export const StyledQWContainer = styled.div`
  > div:nth-child(2) {
    width: 75vw;
    font-size: 32px;
    background: #ffffff;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
    border-radius: 50px;
    margin: auto auto;
    padding: 57px 140px;
    margin-bottom: 77px;

    // Text
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
  }
`;

export function SectionQW() {
  return (
    <StyledSection style={{ marginTop: '20px' }}>
      {/*className='d-md-flex text-left justify-content-center align-items-center p-4'*/}

      <StyledLayoutContainer className='d-md-flex text-left justify-content-center align-items-center p-md-4 text-center'>
        <StyledQWContainer data-aos='fade-down' className='col-md-8'>
          <StyledSectionOneDetails>
            <span>The quality </span>of our water
          </StyledSectionOneDetails>
          <StyledP20 className='accent_text_color'>
            According to the New South Wales Department of Pathology, our water
            is “super clean” and exceeds all the standards of the Australian
            Drinking Water Guidelines.
          </StyledP20>
        </StyledQWContainer>
      </StyledLayoutContainer>
    </StyledSection>
  );
}
