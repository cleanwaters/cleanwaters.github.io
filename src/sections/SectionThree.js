import {StyledLayoutContainer, StyledSection} from "../components/styled-shared";
import {Button} from "../components/button/Button";
import styled from "styled-components";
import {Carousel} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight, faCoffee} from '@fortawesome/free-solid-svg-icons'



export const StyledSectionOneDetails = styled.h2`
    font-weight: bold;
    font-size: 48px !important;
    line-height: 61px;
    color: #081F47;
    margin-bottom: 1em;


    span {
    color: #00C0FF;
    }
`

export const StyledWhatWeDoDetails = styled.div`
    border-left: 1em solid #00C0FF !important;
    font-family:Nunito;

    > div:first-child > p {
        font-weight:600;
        margin:40px 40px 40px 0px;
        font-family:Nunito;
        font-size:20px;
    }

    > div:first-child{
        width:800px;
    }
`

export function SectionThree() {
    // useEffect(()=>{
    //     Aos.init({ duration:2000 })
    // }, [])

    return (
    <StyledSection 
    data-aos="fade-left" 
    style={{textAlign: 'start', padding:'0px 80px', marginTop:'20px'}}>
        <StyledLayoutContainer className="px-4">

                    {/*<StyledSectionOneDetails> <span> How many plastic bottles</span> can you save?</StyledSectionOneDetails>*/}
                    {/*<p className="ui-text-intro">Lorem ipsum dolor sit amet.</p>*/}
                    <StyledWhatWeDoDetails className="d-md-flex px-5">
                        <div>
                            <StyledSectionOneDetails> <span> What we</span> do?</StyledSectionOneDetails>
                            <p>
                                Clean Waters Oceania provides a sustainable supply of fresh, clean and healthy water to households, communities, governments and NGOs
                            </p>
                            <p>
                                To do this we offer our customers Watergen’s world-class and award-winning GENius atmospheric water generators that generate between 10 and 6000 litres of clean water from the air every day

                            </p>

                            <p>
                                It is a fully zero emissions, zero infrastructure sustainable water generation solution, the first of its kind in Australia and the South Pacific

                            </p>

                            <p>
                                here is no need to install any water infrastructure or pipelines, there is no transportation and storage, no more waste of plastic bottles

                            </p>

                            <p>
                                Less emissions, less cost, less plastic, more drinking water

                            </p>


                            {/*<div className="ui-component-cta ui-layout-flex">*/}
                            {/*  <a href="#" role="link" aria-label="#" className="ui-component-button ui-component-button-normal ui-component-button-primary">Get Started for Free</a>*/}
                            {/*  <p className="ui-text-note"><small>30 days free trial.</small></p>*/}
                            {/*</div>*/}
                        </div>
                        <img style={{width:'800px'}} src={process.env.PUBLIC_URL + "/images/air-water.svg"} loading="lazy" alt="#" className="ui-image-half-right" />
                    </StyledWhatWeDoDetails>


        </StyledLayoutContainer>

      </StyledSection>
    )
}




// #EEF9FF