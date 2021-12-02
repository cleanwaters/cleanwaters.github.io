import SectionTwoCarouselItem from './SectionTwoCarouselItem';

import {
  StyledLayoutContainer,
  StyledSection,
} from '../components/styled-shared';
import { Button } from '../components/button/Button';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { StyledBackgroundPattern } from '../App';
import { SectionTwo } from './SectionTwo';
import { BottleAnimations } from './BottleAnimations';

export const StyledSectionOneDetails = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 61px;
  color: #081f47;
  margin-bottom: 1em;

  span {
    color: #00c0ff;
  }
`;

export const sectionTwoCarouselItems = [
  {
    image: 'genny.svg',
    product: 'Genny',
    text: 'Saves up to 18,250 plastic bottles of water a year',
  },
  {
    image: 'genm1.svg',
    product: 'Gen M1',
    text: 'Saves up to 134,000 plastic bottles of water a year',
  },
  {
    image: 'genm.jpeg',
    product: 'Gen M',
    text: 'Saves up to 547,500 plastic bottles of water a year',
  },
  {
    image: 'genl.svg',
    product: 'Gen L',
    text: 'Saves up to 3,650,000 plastic bottles of water a year',
  },
];

const StyledBottleAnimation = styled.div`
  margin: 60vh 0 30vh 0;

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
    // position:relative;
  }
`;

export function SectionTwoBottleAnimation() {
  return (
    <div className='container-fluid' style={{ height: '100vh' }}>
      <Controller>
        <Scene
          // triggerHook="100"
          offset='520'
          duration={800}
          pin
        >
          {(progress) => (
            <div>
              {/*<StyledBackgroundPattern style={{top:'-280px'}}>*/}
              {/*      <img src={process.env.PUBLIC_URL + "/images/background/pattern1.svg"} loading="lazy" alt="image" className="ui-image-half-right" />*/}
              {/*  </StyledBackgroundPattern>*/}
              {/*  <StyledBackgroundPattern style={{top:'630px', left:'-1020px'}}>*/}
              {/*    <img style={{width:'20%'}} src={process.env.PUBLIC_URL + "/images/background/pattern2.svg"} loading="lazy" alt="image" className="ui-image-half-right" />*/}
              {/*</StyledBackgroundPattern>*/}
              <StyledSectionOneDetails>
                {' '}
                <span> How many plastic bottles</span> can you save?
              </StyledSectionOneDetails>
              {/*<p className="ui-text-intro">Lorem ipsum dolor sit amet.</p>*/}

              <StyledBottleAnimation>
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{ opacity: '0.8', top: '0' }}
                    to={{ opacity: '0.1', top: '27px' }}
                  >
                    <div style={{ display: '' }}>
                      <img
                        className='img-fluid'
                        style={{
                          left: '12%',
                          bottom: '80px',
                          width: 'fit-content',
                        }}
                        src={process.env.PUBLIC_URL + '/images/bottles/2xl.svg'}
                        loading='lazy'
                        alt='#'
                      />
                      <img
                        className='img-fluid'
                        style={{
                          left: '79vw',
                          bottom: '80px',
                          width: 'fit-content',
                        }}
                        src={process.env.PUBLIC_URL + '/images/bottles/2xl.svg'}
                        loading='lazy'
                        alt='#'
                      />
                      {/*<img*/}
                      {/*style={{left:'36vw', bottom:'80px'}}*/}
                      {/*src={process.env.PUBLIC_URL + "/images/bottles/half.svg"} loading="lazy" alt="#" />*/}
                      {/*<img*/}
                      {/*style={{left:'65vw', bottom:'127px'}}*/}
                      {/*src={process.env.PUBLIC_URL + "/images/bottles/half.svg"} loading="lazy" alt="#" />*/}
                      {/*<img*/}
                      {/*style={{left:'57.5vw', bottom:'241px'}}*/}
                      {/*src={process.env.PUBLIC_URL + "/images/bottles/2xl.svg"} loading="lazy" alt="#" />*/}
                      {/*<img*/}
                      {/*style={{left:'23.5vw', bottom:'80px'}}*/}
                      {/*src={process.env.PUBLIC_URL + "/images/bottles/3md.svg"} loading="lazy" alt="#" />*/}
                      {/*<img*/}
                      {/*style={{left:'1vw', bottom:'80px'}}*/}
                      {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
                      {/*<img*/}
                      {/*style={{left:'6vw', bottom:'167px'}}*/}
                      {/*src={process.env.PUBLIC_URL + "/images/bottles/trianglemd.svg"} loading="lazy" alt="#" />*/}
                      {/*<img*/}
                      {/*style={{left:'52.5vw', bottom:'80px'}}*/}
                      {/*src={process.env.PUBLIC_URL + "/images/bottles/trianglemd.svg"} loading="lazy" alt="#" />*/}
                      {/*<img*/}
                      {/*style={{left:'22.5vw', bottom:'207px'}}*/}
                      {/*src={process.env.PUBLIC_URL + "/images/bottles/2xl.svg"} loading="lazy" alt="#" />*/}
                    </div>
                  </Tween>
                  <Timeline
                    target={
                      <div style={{ display: '' }}>
                        {/* Second Line */}
                        {/*<img*/}
                        {/*style={{left:'24vw', bottom:'-10px', width: '100%'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/5small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'34vw', bottom:'-10px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/5small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'7.5vw', bottom:'-17px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/4.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'49vw', bottom:'-17px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/4.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'54vw', bottom:'-10px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'71.5vw', bottom:'-15px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/2xl.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'77vw', bottom:'-15px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/2md.svg"} loading="lazy" alt="#" />*/}

                        {/*/!* First Line *!/*/}
                        {/*<img*/}
                        {/*style={{left:'32.5vw'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/2small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'40vw'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/2small.svg"} loading="lazy" alt="#" />*/}

                        {/*/!* Second Line *!/*/}
                        {/*<img*/}
                        {/*style={{left:'30vw', bottom:'80px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/trianglemd.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'57.6vw', bottom:'40px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/3mdxl.svg"} loading="lazy" alt="#" />*/}
                      </div>
                    }
                  >
                    <Tween
                      from={{ opacity: '1', top: '0px' }}
                      to={{ opacity: '0.2', top: '27px' }}
                    />
                    <Tween
                      from={{ opacity: '1', top: '0px' }}
                      to={{ opacity: '0.2', top: '27px' }}
                    >
                      <div>
                        {/*<img*/}
                        {/*style={{left:'0', width: '100%'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/rowsmall.svg"} loading="lazy" alt="#" />*/}
                        {/*<img */}
                        {/*style={{left:'36vw'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/2small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'45vw'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'1vw', bottom:'-10px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'13vw', bottom:'-10px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'53vw'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img */}
                        {/*style={{left:'45vw', bottom:'-10px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/2md.svg"} loading="lazy" alt="#" />*/}
                        {/*<img */}
                        {/*style={{left:'60vw', top:'-38px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/2md.svg"} loading="lazy" alt="#" />*/}
                        {/*<img */}
                        {/*style={{left:'65vw', bottom:'-10px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/3md.svg"} loading="lazy" alt="#" />*/}
                        {/*<img */}
                        {/*style={{left:'20vw', bottom:'-10px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/3.svg"} loading="lazy" alt="#" />*/}
                        {/*<img */}
                        {/*style={{left:'65vw'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/5small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img */}
                        {/*style={{left:'75vw'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/5small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'75%'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/5small.svg"} loading="lazy" alt="#" />*/}
                        {/*<img*/}
                        {/*style={{left:'80vw', bottom:'-10px'}}*/}
                        {/*src={process.env.PUBLIC_URL + "/images/bottles/4small.svg"} loading="lazy" alt="#" />*/}
                      </div>
                    </Tween>
                  </Timeline>
                </Timeline>
              </StyledBottleAnimation>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

// #EEF9FF
