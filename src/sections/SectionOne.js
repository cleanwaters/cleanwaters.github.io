import { Button } from '../components/button/Button';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import LandinPageJumbotron from '../components/LandingPageJumbotron';

const StyledSectionOne = styled.div`
  .react-multi-carousel-dot--active button {
    background-color: #0170b9 !important;
  }

  .react-multi-carousel-dot button {
    width: 18px !important;
    height: 18px !important;
  }

  .react-multi-carousel-dot-list {
    bottom: 7% !important;
  }
`;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1200 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 992 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 992, min: 100 },
    items: 1,
  },
};

export function SectionOne() {
  let navigate = useNavigate();
  useEffect(() => {});

  return (
    <StyledSectionOne>
      <Carousel
        id='section-one-lp'
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
      >
        <LandinPageJumbotron
          video={'final_61b0327d19d9b800c2eb09ba_311269.mp4'}
          paragraph={'Proud Sponsor of the Sail Grand Prix'}
          button={
            <Button
              size='large'
              label='Find out more'
              onClick={() => navigate('/sail-gp')}
              style={{
                color: 'white',
                fontFamily: 'Nunito',
                marginRight: '1em',
                background: '#046EB6',
              }}
            />
          }
        />
        <LandinPageJumbotron
          video={'production ID_3958714.mp4'}
          paragraph={`We use Air as a natural raw material to make top-quality drinking
      water through our atmospheric extraction technology`}
          button={
            <>
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
            </>
          }
        />
      </Carousel>
    </StyledSectionOne>
  );
}

// #EEF9FF
