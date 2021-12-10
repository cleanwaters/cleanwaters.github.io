import React from 'react';
import { StyledSectionOneDetails } from '../../sections/SectionFour';
import { StyledCWCard, StyledListText } from '../../sections/CWCard';
import { caseStudiesData } from '../../data/caseStudies';
import styled from 'styled-components';

export const StyledSectionImage = styled.div`
  @media screen and (max-width: 768px) {
    min-height: 250px;
    margin: 16px 0;
  }
`;

export default function OSSectionOne({ caseStudies }) {
  return (
    <section className='mt-5 container-fluid text-left pt-5'>
      <StyledSectionOneDetails
        data-aos-anchor-placement='top-center'
        className='text-center'
      >
        <span>Case </span> Studies
      </StyledSectionOneDetails>
      {/*<div dangerouslySetInnerHTML={{__html: '<span>Our </span> Solution'}}></div> */}
      {caseStudies.map((item, i) => (
        <div
          className={`d-md-flex ${i % 2 === 0 ? null : 'flex-row-reverse'}`}
          key={i}
          style={{ margin: '120px 0' }}
        >
          <StyledSectionImage
            className={`col-md-${item.imageSize || 6} align-items-stretch`}
            style={{
              background: `url(${item.images[0]})`,
              // width: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          />
          <div
            className={`col-md-${!!item.imageSize ? 12 - item.imageSize : 6}`}
            style={{
              fontSize: '20px',
              padding: '0 40px',
            }}
          >
            <p className='primary_text_color'>
              <strong>{item.name}</strong>
            </p>

            <StyledListText style={{ padding: '16px' }}>
              {item.points.map(function (item, i) {
                return (
                  <li style={{ fontSize: '20px', fontWeight: '400' }} key={i}>
                    {item}
                  </li>
                );
              })}
            </StyledListText>
          </div>
        </div>
      ))}
    </section>
  );
}
