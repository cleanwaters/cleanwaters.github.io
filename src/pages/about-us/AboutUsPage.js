import React from 'react';
import SectionOne from './SectionOne';
import { aboutUsData } from '../../data/aboutUsData';
import { NavbarSecond } from '../../components/NavbarSecond';
import { Footer } from '../../sections/Footer';
import Page from '../../components/Page';
// import OSSectionOne from "./OSSectionOne";
// import {caseStudiesData} from "../../data/caseStudies";

export default function AboutUsPage() {
  return (
    <Page>
      <NavbarSecond />
      <SectionOne aboutUs={aboutUsData} />
      <div style={{ marginBottom: '5em' }}></div>
      <Footer />
    </Page>
  );
}
