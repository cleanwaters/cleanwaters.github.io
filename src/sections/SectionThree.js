import {
  StyledLayoutContainer,
  StyledSection,
} from '../components/styled-shared';
import { StyledLibP, StyledP20 } from '../components/typography/Paragraph';
import styled from 'styled-components';

import { useState } from 'react';

export const StyledSectionOneDetails = styled.h2`
  font-weight: bold;
  font-size: 48px !important;
  line-height: 61px;
  color: #081f47;
  margin-bottom: 1em;

  span {
    color: #00c0ff;
  }
`;

export const StyledWhatWeDoDetails = styled.div`
  border-left: 1em solid #00c0ff !important;
`;

export function SectionThree() {
  const [hide, setHide] = useState(false);

  return (
    <StyledSection data-aos='fade-down' className='px-4 container-fluid'>
      <div className='d-md-flex flex-row-reverse'>
        <div
          className=''
          style={{
            background: `url(${
              process.env.PUBLIC_URL + '/images/air-water.svg'
            })`,
            width: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            minHeight: '20em',
          }}
        >
          {/*<img src={process.env.PUBLIC_URL + "/images/air-water.svg"} alt="#" className="image-fluid" />*/}
        </div>

        <StyledWhatWeDoDetails className='col-md-8 text-left pl-4'>
          <StyledSectionOneDetails>
            {' '}
            <span> What we</span> do?
          </StyledSectionOneDetails>
          <StyledP20 className='text_weight_600'>
            Clean Waters Oceania provides a sustainable supply of fresh, clean
            and healthy water to households, communities, governments and NGOs.
          </StyledP20>
          <StyledP20 className='text_weight_600'>
            To do this we offer our customers Watergen’s world-class and
            award-winning GENius atmospheric water generators that generate
            between 30 and 6000 litres of clean water from the air every day.
          </StyledP20>

          <StyledP20 className='text_weight_600'>
            It is a fully zero emissions, zero infrastructure sustainable water
            generation solution, the first of its kind in Australia and the
            South Pacific.
          </StyledP20>

          <StyledP20 className='text_weight_600'>
            There is no need to install any water infrastructure or pipelines,
            there is no transportation and storage, no more waste of plastic
            bottles.
          </StyledP20>

          <StyledP20 className='text_weight_600'>
            Less emissions, less cost, less plastic, more drinking water.
          </StyledP20>
        </StyledWhatWeDoDetails>
      </div>
    </StyledSection>
  );
}

// #EEF9FF
