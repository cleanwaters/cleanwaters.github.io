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
          className={`d-md-flex my-5 ${
            i % 2 === 0 ? null : 'flex-row-reverse'
          }`}
          key={i}
        >
          <StyledSectionImage
            className='col-md-6 my-5d'
            style={{
              background: `url(${item.images[0]})`,
              width: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          >
            {/*<img src={item.images[0]} className="img-fluid" />*/}
            {/*{ item.images.length > 1 ? (*/}
            {/*    <div className="d-flex py-2">*/}
            {/*        <div className="col-4 px-2">*/}
            {/*            <img src={item.images[1]} className="img-fluid" />*/}
            {/*        </div>*/}
            {/*        <div className="col-4 px-2">*/}
            {/*            <img src={item.images[2]} className="img-fluid" />*/}
            {/*        </div>*/}
            {/*        <div className="col-4 px-2">*/}
            {/*            <img src={item.images[3]} className="img-fluid" />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*) : null}*/}
          </StyledSectionImage>
          <div className='col-md-6'>
            <p className='primary_text_color'>
              <strong>{item.name}</strong>
            </p>

            <StyledListText className='mb-4 p-2'>
              {item.points.map(function (item, i) {
                return <li key={i}>{item}</li>;
              })}
            </StyledListText>
          </div>
        </div>
      ))}
    </section>
  );
}
