import { SectionOne } from '../sections/SectionOne';
import { SectionTwo, StyledSectionOneDetails } from '../sections/SectionTwo';
import { SectionThree } from '../sections/SectionThree';
import { SectionFour } from '../sections/SectionFour';
import { SectionFive } from '../sections/SectionFive';
import { SectionSix } from '../sections/SectionSix';
import { SectionMR } from '../sections/SectionMR';
import { SectionAR } from '../sections/SectionAR';
import { Footer } from '../sections/Footer';
import { SectionQW } from '../sections/SectionQW';
import { StyledBackgroundPattern } from '../App';
import Video from '../sections/Video';

import React from 'react';
import SectionTwoCarousel from '../sections/SectionTwoCarousel';
import { NavbarSecond } from '../components/NavbarSecond';
import { ScrollMagicExampleBottles } from '../sections/ScrollMagicExampleBottles';
import Page from '../components/Page';
import { ExampleAccordion2 } from '../sections/ExampleAccordion2';

export default function LandingPage() {
  return (
    <Page>
      {/* <div className="container-fluid" style={{padding:'1px'}}> */}
      <NavbarSecond />

      <SectionOne />
      {/*<SectionTwoCarousel />*/}

      {/*<SectionTwoWithBackground />*/}

      <div style={{ height: '20px' }}></div>
      <ScrollMagicExampleBottles
        beforeTimeline={
          <div className='container-fluid'>
            <StyledSectionOneDetails className='text-center'>
              <span> How many plastic bottles</span> can you save?
            </StyledSectionOneDetails>
            <SectionTwoCarousel />
          </div>
        }
      />
      <SectionQW />
      <SectionThree />

      {/*todo fix*/}
      <SectionFour />

      <SectionFive />

      <Video video={'Watergen - how it works_.mp4'} />

      {/*<SectionSix />*/}
      <section className='container py-5'>
        <ExampleAccordion2 />
      </section>

      <SectionMR />

      <SectionAR />

      <Footer />
    </Page>
  );
}
