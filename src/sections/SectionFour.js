import { StyledLayoutContainer, StyledSection } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CWCard, StyledCapacityDropIconWrapper } from "./CWCard";


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

export const StyledWhatWeDoDetails = styled.div`
    border-left: 1em solid #00C0FF !important;
`

export function SectionFour() {
    return (
        <StyledSection>
            <StyledLayoutContainer className="px-4">
                <StyledSectionOneDetails> <span> Target Market and </span> Product Line</StyledSectionOneDetails>
                <div className="row" >
                    <div className="container">
                        <div className="row row-cols-3">
                            {
                                [1, 2, 3, 4].map(item => (
                                    <div style={{ position: 'relative', padding: '32px' }}>
                                        <StyledCapacityDropIconWrapper>
                                            <img src="/images/capacity-drop.svg" loading="lazy" alt="#" className="ui-image-half-right" />
                                        </StyledCapacityDropIconWrapper>

                                        <CWCard>

                                        </CWCard>
                                    </div>

                                ))
                            }
                        </div>
                    </div>


                </div>


            </StyledLayoutContainer>

        </StyledSection>
    )
}




// #EEF9FF