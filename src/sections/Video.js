import React from "react";
import { StyledSection } from "../components/styled-shared";


export default function Video({video}){
    return(
        <StyledSection>
            <video  width="100%" height="auto" controls>
                <source src={process.env.PUBLIC_URL + `/videos/${video}`} type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
        </StyledSection>
    )
}