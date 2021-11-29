import React from "react";
import SectionOne from "./SectionOne";
import {aboutUsData} from "../../data/aboutUsData";
// import OSSectionOne from "./OSSectionOne";
// import {caseStudiesData} from "../../data/caseStudies";


export default function AboutUsPage(){
    return(
        <div className="container-fluid">
            <SectionOne aboutUs={aboutUsData} />
        </div>
    )
}
