import React from 'react';
import { SectionMR } from '../../sections/SectionMR';
import { SectionAR } from '../../sections/SectionAR';
import {
  StyledH20,
  StyledH22,
  StyledH28,
  StyledH34,
  StyledH42,
  StyledP12,
  StyledP14,
  StyledP32,
  StyledSectionOneTitle,
} from './Paragraph';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Typography',
  component: StyledSectionOneTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const AllTexts = () => (
  <div>
    <StyledH42>Display</StyledH42>
    <StyledH34>Header</StyledH34>
    <StyledH28>Title 1</StyledH28>
    <StyledH22>Title 2</StyledH22>
    <StyledH20>Headline</StyledH20>
    <StyledP14>Body</StyledP14>
    <StyledP12>caption</StyledP12>
  </div>
);

export const Header = () => <h2>Display</h2>;
