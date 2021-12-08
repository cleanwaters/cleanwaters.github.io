import './App.css';
import './css-styles/LibTypography.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import { NavbarSecond } from './components/NavbarSecond';

import 'aos/dist/aos.css';
import styled from 'styled-components';
import Aos from 'aos';
import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage';

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Contact } from './pages/Contact';
import OurSolutionPage from './pages/our-solutions/OurSolutionPage';
import { Footer } from './sections/Footer';
import CaseStudiesPage from './pages/case-studies/CaseStudiesPage';
import AboutUsPage from './pages/about-us/AboutUsPage';
import OurPartnersPage from './pages/our-partners/OurPartnersPage';
import BackgroundPage from './pages/BackgroundPage';
import SailGP from './pages/sail-gp/SailGP';

export const StyledBackgroundPattern = styled.div`
  position: absolute;
  width: 100vw;
  margin: 0;
  padding: 0;
  z-index: -300;

  > img {
    width: 100vw;
    left: 0;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  useEffect(() => {
    Aos.init({ duration: 500, delay: '50' });

    window.onbeforeunload = function () {
      window.scrollTo({
        left: 0,
      });
    };
  }, []);

  return (
    <Routes>
      <Route exact={true} path='/' element={<LandingPage />} />
      <Route exact={true} path='/our-solution' element={<OurSolutionPage />} />
      <Route exact={true} path='/our-background' element={<BackgroundPage />} />
      <Route exact={true} path='/case-studies' element={<CaseStudiesPage />} />
      <Route exact={true} path='/about-us' element={<AboutUsPage />} />
      <Route exact={true} path='/our-partners' element={<OurPartnersPage />} />
      <Route exact={true} path='/sail-gp' element={<SailGP />} />
      <Route exact={true} path='/contact' element={<Contact />} />

      <Route path='*' element={<div> not found </div>} />
    </Routes>
  );
}

export default App;
