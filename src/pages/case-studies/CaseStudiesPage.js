import React from "react";
import OSSectionOne from "./OSSectionOne";
import {caseStudiesData} from "../../data/caseStudies";


export default function CaseStudiesPage(){
    return(
        <>
            <OSSectionOne caseStudies={caseStudiesData} />
        </>
    )
}
