import React from 'react';
import Page from "./Page";
import {NavbarSecond} from "./NavbarSecond";

export default {
  title: 'Components/Page',
  component: Page,
};

export const PageDefault = () => (
    <>
        <NavbarSecond />
        <Page>
            PageDefault
        </Page>
    </>
    );
