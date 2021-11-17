import { StyledLayoutContainer, StyledSection } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CWCard, StyledCapacityDropIconWrapper } from "./CWCard";
import { featureIconItems } from "./sections-data";
import { StyledSectionOneDetails } from "./SectionFive";



export const StyledFooter = styled.div`
    background: #081F46;
    border-radius: 50px;
    color: white;
    p {
        line-height: 33px;
    }
`



export function Footer() {
    return (
        <StyledFooter>
            <div className=" p-5 mb-5">
                <div className="d-md-flex justify-content-between">
                    <div className="d-md-flex ">
                        <div className="pr-4">
                            <img src={ process.env.PUBLIC_URL + "/images/nav-logo.svg"} className="card-img-top" alt="..." />
                        </div>
                        <div>
                            <h3>
                                Clean waters oceania
                            </h3>
                            <div className="d-flex justify-content-between">
                                <p>About us</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <a href="#" role="link" aria-label="#">
                                <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="#AEAEAE"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" role="img" aria-label="#">
                                    <path
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="#" role="link" aria-label="#">
                                <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="#AEAEAE"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" role="img" aria-label="#">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                            <p>Copyright © 2021 Clean Waters Australia</p>

            </div>

        </StyledFooter>
    )
}




// #EEF9FF