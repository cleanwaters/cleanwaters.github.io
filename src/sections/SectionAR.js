import { StyledLayoutContainer, StyledSection } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CWCard, StyledCapacityDropIconWrapper } from "./CWCard";
import { featureIconItems } from "./sections-data";
import { StyledSectionOneDetails } from "./SectionFive";



export const StyledARCard = styled.div`
background: #FFFFFF;
box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
border-radius: 50px;

p {
line-height: 33px;
}
`

export function SectionAR() {
    return (
        <StyledSection>
            <StyledLayoutContainer className="px-4">
                <StyledSectionOneDetails> <span>Award </span>Record</StyledSectionOneDetails>

                <StyledARCard className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <img src="/images/logo_award_01.png" className="card-img-top" alt="..." />
                        <h5 className="card-title mt-5">Influential invention
                        </h5>
                        <p className="card-text mb-5">Watergen technology selected as one of most influential inventions</p>
                    </div>
                </StyledARCard>
            </StyledLayoutContainer>

        </StyledSection>
    )
}




// #EEF9FF