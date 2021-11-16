import {StyledLayoutContainer, StyledSection} from "../components/styled-shared";
import {Button} from "../components/button/Button";
import styled from "styled-components";
import {Carousel} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight, faCoffee} from '@fortawesome/free-solid-svg-icons'
// font-family: Dosis;
// font-style: normal;
// font-weight: bold;
// font-size: 48px;
// line-height: 61px;
// /* identical to box height */
//
//
// color: #00C0FF;



export const StyledSectionOneDetails = styled.h2`
font-weight: bold;
font-size: 48px;
line-height: 61px;
color: #081F47;
margin-bottom: 1em;

span {
color: #00C0FF;
}
`

export const StyledSectionCardDefault = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
    border-radius: 50px;
`


export const StyledSectionCarouselP = styled.p`
font-weight: bold;
font-size: 32px;
line-height: 44px;

span {
color: #0170B9;
}
`





export function SectionTwo() {
    return (
      <StyledSection>
        <StyledLayoutContainer className="px-4">

                    <StyledSectionOneDetails> <span> How many plastic bottles</span> can you save?</StyledSectionOneDetails>
                    {/*<p className="ui-text-intro">Lorem ipsum dolor sit amet.</p>*/}

                    <Carousel
                        variant="dark"
                        prevLabel={''}
                        nextLabel={''}
                        indicators={false}
                        prevIcon={<FontAwesomeIcon className="m-0" color="black" size="2x" icon={faAngleLeft} />}
                        nextIcon={<FontAwesomeIcon color="black" size="2x" icon={faAngleRight} />}
                        style={{width: '0 !important'}}
                    >
                      <Carousel.Item>


                    <StyledSectionCardDefault className="card" style={{margin: '0 8em'}}>
                        <div className="card-body">
                            <div className="d-flex">
                                <img src="images/genny.svg" loading="lazy" alt="#" className="ui-image-half-right img-fluid" />
                                <div className="flex-grow-1 align-self-center">

                                <StyledSectionCarouselP>
                                    <span>Genny</span> – Saves up to 18,250 plastic bottles of water a year
                                </StyledSectionCarouselP>
                                </div>

                            </div>
                        </div>
                    </StyledSectionCardDefault>
                                                  <Carousel.Caption>
                          {/*<h3>First slide label</h3>*/}
                          {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>

        </StyledLayoutContainer>

      </StyledSection>
    )
}




// #EEF9FF