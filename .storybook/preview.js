import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import { MemoryRouter } from "react-router";
import React from "react";
import { addDecorator } from "@storybook/react";
addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

