import React from 'react';
import { StyledSectionOneDetails } from '../../sections/SectionFour';
import {
  StyledSectionOneP,
  StyledSectionSubtitle,
} from '../../components/typography/Paragraph';
import { StyledCWCard } from '../../sections/CWCard';
import styled from 'styled-components';
import { Accordion, useAccordionButton } from 'react-bootstrap';

export const StyledSectionLightP = styled.p`
  color: var(--ui-color-accent);
  font-weight: 600;
  font-family: Nunito;
  font-style: normal;
  text-align: center;
`;

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!', eventKey)
  );

  return (
    <div onMouseLeave={decoratedOnClick} onMouseEnter={decoratedOnClick}>
      {children}
    </div>
  );
}

export default function SectionOne({ aboutUs }) {
  return (
    <section className='mt container-fluid text-left text-center'>
      {/* <StyledSectionOneDetails
        data-aos-anchor-placement='top-center'
        style={{ margin: 0 }}
      >
        <span>About </span> us
      </StyledSectionOneDetails> */}
      {/* <StyledSectionSubtitle className='mb-5'>
        {aboutUs.subTitle}
      </StyledSectionSubtitle> */}

      {/* <div className={`d-md-flex flex-row-reverse my-5 px-md-5`}> */}
      {/* <div className='col-md-4'>
          <img
            src={aboutUs.sectionOne.image}
            alt='image'
            className='img-fluid'
          />
        </div> */}

      {/* <div className='text-left'>
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
          </div>
        </div> */}
      {/* </div> */}

      <div className='container-fluid mt-5'>
        <Accordion>
          <div className='row'>
            {aboutUs.teamList.map((teamItem, index) => (
              <div className='col-md-4'>
                <StyledCWCard className='my-4 p-5'>
                  <CustomToggle eventKey={index}>
                    <img
                      src={teamItem.image}
                      className='mb-3 black_white_image'
                      height={'150px !important'}
                      width='150px'
                      alt={`${teamItem.name}`}
                    />
                    <div style={{ position: 'relative' }}>
                      <div style={{ height: '27px' }}>
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
                    </div>
                  </CustomToggle>
                  <Accordion.Collapse eventKey={index}>
                    <div style={{ marginTop: '40px' }}>
                      {teamItem.description}
                    </div>
                  </Accordion.Collapse>
                </StyledCWCard>
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  );
}
