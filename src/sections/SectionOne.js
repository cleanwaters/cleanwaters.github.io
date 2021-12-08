import { Button } from '../components/button/Button';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";

export const StyledHeaderH1 = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 65px;
  color: white;
  font-family: Nunito;
`;

export const StyledSectionOneP = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 55px;
  font-family: Dosis;

  // color: #081F46;
  color: white;
  margin-bottom: 40px !important;
`;

export const StyledSectionOneDetails = styled.div`
  // padding: 20em 7em;
  margin: 20vw 0 0 7em;
`;


const StyledSectionOne = styled.div`
  .react-multi-carousel-dot--active button  {
    background-color:#0170b9 !important;
  }

  .react-multi-carousel-dot button  {
    width:18px !important;
    height: 18px !important;
  }

  .react-multi-carousel-dot-list {
    bottom:5% !important;
  }
`


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 1
  },
  desktop: {
      breakpoint: { max: 1400, min: 1200 },
      items: 1
  },
  tablet: {
    breakpoint: { max: 1200, min: 992 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 992, min: 464 },
    items: 1
  }
};


export function SectionOne() {
  let navigate = useNavigate();
  useEffect(() => {});

  return (
    <StyledSectionOne>
      <Carousel id="section-one-lp" responsive={responsive} showDots={true} autoPlay={true} autoPlaySpeed={6000} infinite={true}>
        <div className='jumbotron jumbotron-fluid' style={{ background: 'black' }}>
          <video autoPlay muted loop crossorigin playsinline>
            <source
              src={process.env.PUBLIC_URL + `/videos/production ID_3958714.mp4`}
              type='video/mp4'
            />
          </video>
          {/* <Navbar/> */}
          <div
            data-aos='fade-up'
            style={{ zIndex: 4, position: 'relative', marginTop: '20vw' }}
            className='d-md-flex'
          >
            <div className='col-md-6'>
              <StyledHeaderH1
                className='header-title-color'
                style={{ fontSize: '48px' }}
              >
                Clean Water
              </StyledHeaderH1>
              <StyledSectionOneP className='mb-3'>
                We use Air as a natural raw material to make top-quality drinking
                water through our atmospheric extraction technology
              </StyledSectionOneP>
              <div className='d-flex'>
                <Button
                  size='large'
                  label='Our product'
                  onClick={() => navigate('/our-solution')}
                  style={{
                    color: 'white',
                    fontFamily: 'Nunito',
                    marginRight: '1em',
                    background: '#046EB6',
                  }}
                />
                <Button
                  size='large'
                  label='About us'
                  onClick={() => navigate('/about-us')}
                  style={{
                    color: 'white',
                    fontFamily: 'Nunito',
                    borderColor: 'white',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='jumbotron jumbotron-fluid' style={{ background: 'black' }}>
          <video autoPlay muted loop>
            <source crossorigin playsinline
              src={process.env.PUBLIC_URL + `/videos/What Is SailGP.mp4`}
              type='video/mp4'
            />
          </video>
          {/* <Navbar/> */}
          <div
            data-aos='fade-up'
            style={{ zIndex: 4, position: 'relative', marginTop: '20vw' }}
            className='d-md-flex'
          >
            <div className='col-md-6'>
              <StyledHeaderH1
                className='header-title-color'
                style={{ fontSize: '48px' }}
              >
                Clean Water
              </StyledHeaderH1>
              <StyledSectionOneP className='mb-3'>
                Proud Sponsor of the Sail Grand Prix
              </StyledSectionOneP>
              <div className='d-flex'>
                <Button
                  size='large'
                  label='Our product'
                  onClick={() => navigate('/our-solution')}
                  style={{
                    color: 'white',
                    fontFamily: 'Nunito',
                    marginRight: '1em',
                    background: '#046EB6',
                  }}
                />
                <Button
                  size='large'
                  label='About us'
                  onClick={() => navigate('/about-us')}
                  style={{
                    color: 'white',
                    fontFamily: 'Nunito',
                    borderColor: 'white',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </StyledSectionOne>
  );
}

// #EEF9FF
