import React from 'react';

import { SectionOne } from './SectionOne';
import { SectionTwo, StyledSectionOneDetails } from './SectionTwo';
import { SectionThree } from './SectionThree';
import { SectionFour } from './SectionFour';
import { SectionFive } from './SectionFive';
import { SectionSix } from './SectionSix';
import { SectionMR } from './SectionMR';
import { SectionAR } from './SectionAR';
import { Footer } from './Footer';
import Video from './Video';
import { BottleAnimations, BottleAnimations2 } from './BottleAnimations';
import { SectionQW } from './SectionQW';
import { ScrollMagicExampleBottles } from './ScrollMagicExampleBottles';
import SectionTwoCarousel from './SectionTwoCarousel';
import { ExampleAccordion } from './ExampleAccordion';
import { ExampleAccordion2 } from './ExampleAccordion2';

export default {
  title: 'Sections/Home/Section One',
  component: SectionOne,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  // <div className="container-fluid">
  <SectionOne />
);
// </div>

export const Basic = Template.bind({});
// export const SectionTwoTemplate = function() {
//   return (<SectionTwo />)
// };
export const Primary = () => <SectionTwo />;
export const QW = () => <SectionQW />;
export const MagicBottles = () => (
  <div>
    <div style={{ height: '100vh' }}></div>
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
  </div>
);

export const Three = () => <SectionThree />;
export const Four = () => <SectionFour />;
export const Five = () => <SectionFive />;
export const FiveVideo = () => <Video video={'Watergen - how it works_.mp4'} />;
export const Six = () => <SectionSix />;
export const BottleAnimationsStory = () => (
  <div style={{ position: 'absolute' }}>
    <BottleAnimations />
  </div>
);

export const BottleAnimationsStory2 = () => (
  <div>
    <BottleAnimations2 />
  </div>
);

export const Eight = () => <SectionMR />;
export const Nine = () => <SectionAR />;
export const FooterExample = () => <Footer />;
export const StoryAccordion = () => <ExampleAccordion />;
export const StoryAccordion2 = () => <ExampleAccordion2 />;
