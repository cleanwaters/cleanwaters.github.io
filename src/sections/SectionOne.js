import { Button } from '../components/button/Button';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

export function SectionOne() {
  let navigate = useNavigate();
  useEffect(() => {});

  return (
    <div className='jumbotron jumbotron-fluid' style={{ background: 'black' }}>
      <video autoPlay muted loop>
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
  );
}

// #EEF9FF
