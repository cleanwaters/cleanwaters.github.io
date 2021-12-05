import React from 'react';
import OSSectionOne from './OSSectionOne';
import { caseStudiesData } from '../../data/caseStudies';
import { NavbarSecond } from '../../components/NavbarSecond';
import { Footer } from '../../sections/Footer';
import Page from '../../components/Page';

export default function CaseStudiesPage() {
  return (
    <Page>
      <NavbarSecond />
      <OSSectionOne caseStudies={caseStudiesData} />
      <Footer />
    </Page>
  );
}
