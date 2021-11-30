import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import '../src/index.css';
import '../src/fonts.css';
import '../src/css-styles/LibTypography.css'

import 'aos/dist/aos.css';
import { MemoryRouter } from "react-router";
import React from "react";
import { addDecorator } from "@storybook/react";
import Aos from "aos";
addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

Aos.init({ duration: 500, delay: "50" })
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

