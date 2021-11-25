import React from 'react';

import {Navbar} from "./Navbar";
import { NavbarSecond } from "./NavbarSecond";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Sections/Navbar',
  component: Navbar,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Navbar {...args} />;
const Template2 = (args) => <NavbarSecond {...args} />;

export const Basic = Template.bind({});

export const Basic2 = Template2.bind({});
