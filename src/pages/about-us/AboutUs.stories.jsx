import React from 'react';
import {caseStudiesData} from "../../data/caseStudies";
import AboutUsPage from "./AboutUsPage";


export default {
  title: 'Page/AboutUsPage',
  component: AboutUsPage,
};

export const Section1 = () => <AboutUsPage caseStudies={caseStudiesData} />;
