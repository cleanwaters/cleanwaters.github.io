import React from 'react';
import OurPartnersPage from "./OurPartnersPage";
import {ourPartnersData} from "../../data/ourPatnersData";


export default {
  title: 'Page/OurPartners',
  component: OurPartnersPage,
};

export const Section1 = () => <OurPartnersPage ourPartners={ourPartnersData} />;
