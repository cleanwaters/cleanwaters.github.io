import { StyledLayoutContainer, StyledSection } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CWCard, StyledCapacityDropIconWrapper } from "./CWCard";
import { featureIconItems } from "./sections-data";


export const StyledSectionOneDetails = styled.h2`
font-weight: bold;
// font-size: 48px;
line-height: 61px;
color: #081F47;
margin-bottom: 1em;

span {
color: #00C0FF;
}
`

export const StyledIconCard = styled.div`
    background: #FFFFFF;
box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
border-radius: 16px;
// padding: 28px 14px;

p {
line-height: 33px;
}
`

export function SectionSix() {
    return (
        <StyledSection style={{ textAlign: 'start' }}>
            <StyledLayoutContainer className="px-4">
                {/*<StyledSectionOneDetails> <span>How it </span>works?</StyledSectionOneDetails>*/}
                <div className="container">
                    <div className="row row-cols-3">

                        {
                            featureIconItems.map(iconItem => (
                                <div className="col py-2">
                                    <StyledIconCard className="p-4">
                                        <img src={ process.env.PUBLIC_URL + `/images/${iconItem.icon}.svg`} loading="lazy" alt="#" className="py-2" />
                                        <p>{iconItem.title}</p>

                                    </StyledIconCard>
                                </div>

                            ))
                        }
                    </div>
                </div>

            </StyledLayoutContainer>

        </StyledSection>
    )
}




// #EEF9FF