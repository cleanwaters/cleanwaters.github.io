import React from 'react';
import { Timeline, Tween } from 'react-gsap';
import { StyledSectionOneDetails } from './SectionTwo';
import styled from 'styled-components';

export const StyledBottleAnimation = styled.div`
  > div {
    position: relative;
  }

  > div:first-child {
    opacity: 0.1;
  }

  > div:nth-child(2),
  div:nth-child(3) {
    opacity: 0.5;
    top: 17px;
  }

  img {
    position: absolute;
    width: 100%;
    // position:relative;
  }
`;

export function BottleAnimations() {
  return (
    <div>
      <img
        style={{ left: '0', maxWidth: '100%' }}
        src={process.env.PUBLIC_URL + '/images/bottles/rowsmall.svg'}
        loading='lazy'
        alt='#'
      />
      <img
        style={{ left: '36vw', maxWidth: '100%' }}
        src={process.env.PUBLIC_URL + '/images/bottles/2small.svg'}
        loading='lazy'
        alt='#'
      />
      {/*<img*/}
      {/*style={{left:'45vw', maxWidth: '100%'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'1vw', bottom:'-10px', maxWidth: '100%'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'13vw', bottom:'-10px', maxWidth: '100%'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'53vw', maxWidth: '100%'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'45vw', bottom:'-10px', maxWidth: '100%'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/2md.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'60vw', top:'-38px', maxWidth: '100%'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/2md.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'65vw', bottom:'-10px', maxWidth: '100%'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/3md.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'20vw', bottom:'-10px', maxWidth: '100%'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/3.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'65vw', maxWidth: '100%'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/5small.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'75vw'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/5small.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'75%'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/5small.svg"} loading="lazy" alt="#" />*/}
      {/*<img*/}
      {/*style={{left:'80vw', bottom:'-10px'}}*/}
      {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
    </div>
  );
}

export function BottleAnimations2() {
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center'>
        <div className='col-6'>
          <img
            className='img-fluid'
            src={process.env.PUBLIC_URL + '/images/bottles/water_big.png'}
            loading='lazy'
            alt='#'
          />
        </div>
        <div className='col-6'>
          <img
            className='img-fluid'
            src={process.env.PUBLIC_URL + '/images/bottles/water_big.png'}
            loading='lazy'
            alt='#'
          />
        </div>
      </div>
    </div>
  );
}
