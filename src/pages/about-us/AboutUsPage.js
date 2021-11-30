import React from "react";
import SectionOne from "./SectionOne";
import {aboutUsData} from "../../data/aboutUsData";
import {NavbarSecond} from "../../components/NavbarSecond";
import {Footer} from "../../sections/Footer";
// import OSSectionOne from "./OSSectionOne";
// import {caseStudiesData} from "../../data/caseStudies";


export default function AboutUsPage(){
    return(
        <div className="container-fluid p-0">
            <NavbarSecond />
            <SectionOne aboutUs={aboutUsData} />
            <div style={{marginBottom: '5em'}}></div>
            <Footer/>
        </div>
    )
}
