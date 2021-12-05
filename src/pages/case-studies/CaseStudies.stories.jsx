import React from 'react';
import OSSectionOne from "./OSSectionOne";
import {caseStudiesData} from "../../data/caseStudies";


export default {
  title: 'Page/CaseStudies',
  component: OSSectionOne,
};

export const Section1 = () => <OSSectionOne caseStudies={caseStudiesData} />;
