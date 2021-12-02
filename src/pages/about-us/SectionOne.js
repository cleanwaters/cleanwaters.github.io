import React from 'react';
import { StyledSectionOneDetails } from '../../sections/SectionFour';
import {
  StyledSectionOneP,
  StyledSectionSubtitle,
} from '../../components/typography/Paragraph';
import { StyledCWCard } from '../../sections/CWCard';
import styled from 'styled-components';

export const StyledSectionLightP = styled.p`
  color: var(--ui-color-accent);
  font-weight: 600;
  font-family: Nunito;
  font-style: normal;
  text-align: center;
`;

export default function SectionOne({ aboutUs }) {
  return (
    <section
      style={{
        backgroundImage: `url(/images/background/Ellipse13.svg)`,
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat, repeat',
      }}
      className='mt-5 container-fluid text-left pt-5 text-center'
    >
      <StyledSectionOneDetails
        data-aos-anchor-placement='top-center'
        style={{ margin: 0 }}
      >
        <span>About </span> us
      </StyledSectionOneDetails>
      <StyledSectionSubtitle className='mb-5'>
        {aboutUs.subTitle}
      </StyledSectionSubtitle>

      <div className={`d-md-flex flex-row-reverse my-5 px-md-5`}>
        <div className='col-md-4'>
          <img src={aboutUs.sectionOne.image} className='img-fluid' />
        </div>

        <div className='text-left'>
          <div className='mr-md-5 p-3 pt-5'>
            {aboutUs.sectionOne.details.map((pText) => (
              <StyledSectionOneP
                dangerouslySetInnerHTML={{ __html: pText }}
              ></StyledSectionOneP>
            ))}
            <StyledSectionOneP
              className='mt-5'
              dangerouslySetInnerHTML={{
                __html: aboutUs.sectionOne.closingSignature,
              }}
            ></StyledSectionOneP>
            {/*<div dangerouslySetInnerHTML={{ __html: aboutUs.sectionOne.closingSignature }} />*/}
          </div>
        </div>
      </div>

      <div className='container-fluid mt-5'>
        <div className='row'>
          {aboutUs.teamList.map((teamItem) => (
            <div className='col-md-4'>
              <StyledCWCard className='my-4 p-5'>
                <img
                  src={teamItem.image}
                  className='img-fluid mb-3 black_white_image'
                  height={'150px'}
                />
                <div style={{ position: 'relative' }}>
                  {teamItem.subName ? (
                    <>
                      <StyledSectionOneP className='m-0'>
                        {teamItem.name}
                      </StyledSectionOneP>
                      <StyledSectionLightP
                        className='text-center'
                        style={{
                          position: 'absolute',
                          color: '#767676',
                          width: '100%',
                        }}
                      >
                        {teamItem.subName}
                      </StyledSectionLightP>
                    </>
                  ) : (
                    <StyledSectionOneP>{teamItem.name}</StyledSectionOneP>
                  )}
                </div>
              </StyledCWCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
