import { StyledLayoutContainer, StyledSection } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CWCard, StyledCapacityDropIconWrapper } from "./CWCard";
import { featureIconItems } from "./sections-data";
import { StyledSectionOneDetails } from "./SectionFive";



export const StyledIconCard = styled.div`
    background: #FFFFFF;
box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
border-radius: 16px;
// padding: 28px 14px;

p {
line-height: 33px;
}
`

export function SectionMR() {
    return (
        <StyledSection>
            <StyledLayoutContainer className="px-4">
                <StyledSectionOneDetails> <span>Media </span>Report</StyledSectionOneDetails>
                <div className="card" style={{ width: "18rem", textAlign: 'start'  }}>
                    <img src={ process.env.PUBLIC_URL + "/images/mr-trash.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Our Oceans are Drowning… in Plastic
                        </h5>
                        <p className="card-text">lastic pollution is one of the greatest threats to our oceans.</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </StyledLayoutContainer>

        </StyledSection>
    )
}




// #EEF9FF