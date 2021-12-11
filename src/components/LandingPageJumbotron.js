import React from 'react';
import styled from 'styled-components';

export const StyledHeaderH1 = styled.h1`
  color: white;
  font-family: Nunito;

  @media only screen and (min-width: 300px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 56px;
  }

  @media only screen and (min-width: 600px) {
    font-weight: 800;
    font-size: 48px;
    line-height: 65px;
  }
`;

export const StyledSectionOneP = styled.p`
  font-family: Dosis;

  // color: #081F46;
  color: white;

  @media only screen and (min-width: 300px) {
    font-weight: 500;
    font-size: 28px;
    line-height: 50px;
    margin-bottom: 10px !important;
  }

  @media only screen and (min-width: 600px) {
    font-weight: 600;
    font-size: 36px;
    line-height: 55px;
    margin-bottom: 40px !important;
  }
`;

const StyledJumbotron = styled.div`
  > div:nth-child(2) {
    z-index: 4;
    position: relative;
  }

  @media only screen and (min-width: 300px) {
    div:nth-child(2) {
      margin-top: 0vw;
    }
  }

  @media only screen and (min-width: 600px) {
    > div:nth-child(2) {
      margin-top: 20vw;
    }
  }
`;

const StyledJumbotronDetail = styled.div`
  padding: 0 8em;
  @media (max-width: 768px) {
    padding: 0 1em;
  }
`;

export default function LandinPageJumbotron({
  video,
  button,
  paragraph,
  title = 'Clean Waters',
}) {
  return (
    <StyledJumbotron
      className='jumbotron jumbotron-fluid'
      style={{ background: 'black' }}
    >
      <video autoPlay muted loop crossorigin playsinline>
        <source
          src={process.env.PUBLIC_URL + `/videos/${video}`}
          type='video/mp4'
        />
      </video>
      {/* <Navbar/> */}
      <div
        data-aos='fade-up'
        className='d-flex align-items-end pb-4'
        style={{ height: '100%', margin: '0' }}
      >
        <StyledJumbotronDetail
          className='col-md-6'

          // style={{ padding: '0 8em' }}
        >
          <StyledHeaderH1
            className='header-title-color'
            style={{ fontSize: '48px' }}
          >
            {title}
          </StyledHeaderH1>
          <StyledSectionOneP className='mb-3'>{paragraph}</StyledSectionOneP>
          <div className='d-flex'>{button}</div>
        </StyledJumbotronDetail>
      </div>
    </StyledJumbotron>
  );
}
