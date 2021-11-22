import React from "react";
import styled from "styled-components";
import { StyledSection, StyledLayoutContainer } from "../components/styled-shared";
import { StyledSectionOneDetails } from "./SectionFive";


export const StyledQWContainer = styled.div`
    > div:nth-child(2){
        width:1246px;
        font-size:32px;
        height:252px;
        background: #FFFFFF;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
        border-radius: 50px;
        margin:auto auto;
        padding:57px 140px;
        margin-bottom:77px;

        // Text
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 44px;
        text-align: center;
    }
`

export function SectionQW(){
    return (
        <StyledSection style={{marginTop:'120px'}}>
            <StyledLayoutContainer>
                <StyledQWContainer data-aos="fade-down">
                    <StyledSectionOneDetails> <span>The quality </span>of our water</StyledSectionOneDetails>
                    <div>
                        According to the New South Wales Department of Pathology, our water is “super clean” and meets all the standards of the Australian Drinking Water Guidelines.
                    </div>
                </StyledQWContainer>
            </StyledLayoutContainer>
        </StyledSection>
    )
}