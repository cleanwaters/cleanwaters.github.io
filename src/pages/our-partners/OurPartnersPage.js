import React, { useState } from 'react';
import { StyledSectionOneDetails } from '../../sections/SectionFour';
import { ourPartnersData } from '../../data/ourPatnersData';
import { Nav } from 'react-bootstrap';
import {
  StyledP18,
  StyledP24,
  StyledP36,
  StyledSectionOneP,
} from '../../components/typography/Paragraph';
import { NavbarSecond } from '../../components/NavbarSecond';
import { Footer } from '../../sections/Footer';
import Page from '../../components/Page';
import styled from 'styled-components';
import { SectionOneImage } from './SectionOne';

export const StyledSectionImage = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background: white;
  @media screen and (max-width: 768px) {
    min-height: 250px;
    margin: 16px 0;
  }
`;
const imageStyle = {
  width: '100%',
  height: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center center',
};

export default function OurPartnersPage({ ourPartners }) {
  const [selectedArticle, setSelectedArticle] = useState(
    ourPartnersData.articleTabs[0]
  );
  return (
    <Page>
      <NavbarSecond />
      <section
        className='text-center d-flex justify-content-center align-items-center'
        style={{
          color: 'white',
          minHeight: '60vh',
          backgroundImage: `linear-gradient(
                          rgba(0, 0, 0, 0.5), 
                          rgba(0, 0, 0, 0.5)
                        ),url(${ourPartnersData.headerImage})`,
        }}
      >
        <div className='mx-md-5'>
          <StyledSectionOneDetails style={{ color: 'white' }}>
            {ourPartnersData.title}
          </StyledSectionOneDetails>
          <p>{ourPartnersData.subTitle}</p>
        </div>
      </section>

      <section>
        <div className='d-md-flex justify-content-around'>
          {ourPartnersData.partnerLogos.map((logo) => (
            <div style={{ width: '360px' }} className='d-flex  px-4'>
              <div className='align-self-center'>
                <img src={logo.image} loading='lazy' className='img-fluid' />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Nav fill variant='tabs' className='px-5'>
        {ourPartnersData.articleTabs.map((article, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              style={
                selectedArticle.tabNumber === article.tabNumber
                  ? { background: '#081F46', color: 'white' }
                  : {}
              }
              active={selectedArticle.tabNumber === article.tabNumber}
              onClick={() => setSelectedArticle(article)}
            >
              {article.tabTitle}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <div
        className='d-md-flex text-left justify-content-center align-items-center p-4'
        style={{ minHeight: '50vh' }}
      >
        <div className='d-md-flex text-left flex-row-reverse'>
          <div className='col-md-4 d-flex justify-content-center align-items-center p-5'>
            <img src={selectedArticle.image} className='img-fluid' />
          </div>

          {/*{*/}
          {/*    !!selectedArticle ? (*/}

          {/*            <SectionOneImage selectedArticle={selectedArticle} />*/}

          {/*    ) : null*/}
          {/*}*/}

          <div className='col-md-8'>
            <StyledP36 className='mb-2 text_bold'>
              {selectedArticle.articleTitle}
            </StyledP36>
            <StyledP24 className='mb-4'>{selectedArticle.subTitle}</StyledP24>

            {selectedArticle.articleTexts.map((pText) => (
              <StyledP18>{pText}</StyledP18>
            ))}
          </div>
        </div>
      </div>

      <section
        className='text-center d-flex justify-content-center align-items-center p-4'
        style={{
          color: 'white',
          minHeight: '380px',
          backgroundImage: `linear-gradient(
                          rgba(0, 0, 0, 0.5), 
                          rgba(0, 0, 0, 0.5)
                        ),url(${ourPartnersData.lastSection.image})`,
          backgroundRepeat: 'no-repeat, repeat',
          marginBottom: '0',
        }}
      >
        <div className='mx-md-5'>
          <StyledSectionOneDetails style={{ color: 'white' }}>
            {ourPartnersData.lastSection.title}
          </StyledSectionOneDetails>
          <p>{ourPartnersData.lastSection.text}</p>
        </div>
      </section>
      <Footer />
    </Page>
  );
}
