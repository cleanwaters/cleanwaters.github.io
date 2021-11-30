import React from "react";
import OSSectionOne from "./OSSectionOne";
import {NavbarSecond} from "../../components/NavbarSecond";
import {Footer} from "../../sections/Footer";


export default function OurSolutionPage(){
    return(
        <div className="container-fluid p-0">
            <NavbarSecond />
            <OSSectionOne />
            <Footer/>
        </div>
    )
}