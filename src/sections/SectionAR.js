import { StyledLayoutContainer, StyledSection, StyledCarouselContainer } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CWCard, StyledCapacityDropIconWrapper } from "./CWCard";
import { StyledSectionOneDetails } from "./SectionFive";
import { awardRecordItems } from "./sections-data";



export const StyledARCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
    border-radius: 50px;
    margin:0px 40px 40px 0px;

    p {
        line-height: 33px;
    }
`

export const StyledAwardContainer = styled.div`
    dislay:flex;
    width:100%;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    font-family:'Nunito';
`

export function SectionAR() {
    return (
        <StyledSection>
            <StyledLayoutContainer className="px-5">
                <StyledSectionOneDetails> <span>Award </span>Record</StyledSectionOneDetails>
                    <StyledAwardContainer>
                        {
                            awardRecordItems.map((item, i)=>(
                                <StyledARCard
                                key={i}
                                data-aos-duration="2000" data-aos-delay={`${100*(i+1)}`} data-aos="flip-up"
                                className="card" style={{ width: "17vw" }}>
                                <div className="card-body">
                                    <img src={ process.env.PUBLIC_URL + `/images/awards/${item.image}`} className="card-img-top" alt="..." />
                                    <h5 className="card-title mt-5">{item.title}
                                    </h5>
                                    <p className="card-text mb-5">{item.description}</p>
                                </div>
                            </StyledARCard>
                            ))
                        }
                    </StyledAwardContainer>
            </StyledLayoutContainer>
        </StyledSection>
    )
}




// #EEF9FF