import React from 'react';

import { SectionOne } from './SectionOne';
import { SectionTwo } from './SectionTwo';
import { SectionThree } from './SectionThree';
import { SectionFour } from './SectionFour';
import { SectionFive } from './SectionFive';
import { SectionSix } from './SectionSix';
import { SectionMR } from './SectionMR';
import { SectionAR } from './SectionAR';
import { Footer } from './Footer';
import Video from './Video';
import { BottleAnimations, BottleAnimations2 } from './BottleAnimations';

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
