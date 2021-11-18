import React from "react";
import { StyledSection } from "../components/styled-shared";


export default function Video({video}){
    return(
        <StyledSection>
            <div>
                <video width="1000" height="500" controls>
                    <source src={process.env.PUBLIC_URL + `/videos/${video}`} type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            </div>
        </StyledSection>
    )
}