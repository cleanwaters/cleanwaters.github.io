import React from 'react';

import {SectionOne} from "./SectionOne";
import {SectionTwo} from "./SectionTwo";
import {SectionThree} from "./SectionThree";

export default {
  title: 'Sections/Home/Section One',
  component: SectionOne,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) =>
    // <div className="container-fluid">
        <SectionOne />
    // </div>

;

export const Basic = Template.bind({});
// export const SectionTwoTemplate = function() {
//   return (<SectionTwo />)
// };
export const Primary = () => <SectionTwo  />;
export const Three = () => <SectionThree  />;

