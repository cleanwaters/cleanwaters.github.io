import React from "react";
import OSSectionOne from "./OSSectionOne";
import {caseStudiesData} from "../../data/caseStudies";
import {NavbarSecond} from "../../components/NavbarSecond";
import {Footer} from "../../sections/Footer";


export default function CaseStudiesPage(){
    return(
        <>
            <NavbarSecond />
            <OSSectionOne caseStudies={caseStudiesData} />
            <Footer/>
        </>
    )
}
