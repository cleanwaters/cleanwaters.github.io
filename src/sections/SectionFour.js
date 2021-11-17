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

export const StyledCardTopRightText = styled.div`
    position:absolute;
    right:12px;
    top:100px;
    z-index:200;
    font-family:Dosis;
    color:white;

    div:first-child {
        font-size:12px;
    }

    div:nth-child(2) {
        font-size:20px;
    }
`

export const StyledWhatWeDoDetails = styled.div`
    border-left: 1em solid #00C0FF !important;
`

const targetMarketProduct = [
    {
        title : 'Mobile Box',
        targets : ['Outdoor recreation community – hard to generate water on the go', 'Defence and Special Forces – water access, no matter the location or nature of deployment'],
        capacity : 20,
        image : 'mobilebox.svg'
    },
    {
        title : 'Genny',
        targets : ['Homes and offices seeking sustainable water solution'],
        capacity : 30,
        image : 'genny.svg'
    },
    {
        title : 'Gen-M1',
        targets : [
            'Weekenders – homes in the country with limited or intermittent water supply; thousands of these properties across northern and western NSW alone',
            'Landowners/agriculture – poor bore water quality, no town water, but desire for clean drinking water'
        ],
        capacity : 220,
        image : 'genm1.svg'
    },
    {
        title : 'Gen-M',
        targets : [
            'Parks and public spaces',
            'Low density property developments',
            'Environmentally damaged town',
            'First Nations communities – difficult and remote with limited access to fresh water',
            'Landowners/agriculture – poor bore water quality, no town water, but desire for clean drinking water',
            'Emergency – Drought, fire, flood, disaster zones with need for rapid deployment of emergency water supply'
        ],
        capacity : 220,
        image : 'genm.svg'
    },
    {
        title : 'Gen-L',
        targets : [
            'Parks and public spaces',
            'High density property developments',
            'Remote mining and infrastructure - supply chain certainty',
            'Local government - zero infrastructure water solutions',
        ],
        capacity : 6000,
        image : 'genl.svg'
    }
]

export function SectionFour() {
    return (
        <StyledSection>
            <StyledLayoutContainer className="px-4">
                <StyledSectionOneDetails> <span> Target Market and </span> Product Line</StyledSectionOneDetails>
                <div className="row" >
                    <div className="container" style={{maxWidth:'1470px'}}>
                        <div className="row row-cols-3">
                            {
                                targetMarketProduct.map(item => (
                                    <div style={{ position: 'relative', padding: '32px' }}>
                                        <StyledCardTopRightText>
                                            <div>Capacity</div>
                                            <div>{item.capacity} L</div>
                                        </StyledCardTopRightText>
                                        <StyledCapacityDropIconWrapper>
                                            <img src={process.env.PUBLIC_URL + "/images/capacity-drop.svg"} loading="lazy" alt="#" className="ui-image-half-right" />
                                        </StyledCapacityDropIconWrapper>

                                        <CWCard
                                        title={item.title}
                                        listText={item.targets}
                                        image={`section4/${item.image}`}
                                        >

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