import { StyledLayoutContainer, StyledSection } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CWCard, StyledCapacityDropIconWrapper } from "./CWCard";
import { featureIconItems } from "./sections-data";
import { useState } from "react";


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

h5 {
    height:51px;
}
`

export function SectionSix() {
    const [ idHover, setIdHover ] = useState(null)

    function openCard(e){
        e.stopPropagation()
        console.log('openCard', e.target.id)
        const target = e.target
        const classNames = target.className
        if (!e.target.id) {
            return
        }

        if(classNames.includes('s5-card')){
            setIdHover(target.id)
            // target.style.height = '400px'
            // target
        }
    }

    function closeCard(e){
        e.stopPropagation()
        console.log('closeCard', e.target.id)
        setIdHover(null)
        // const target = e.target
        // target.style.height = '210px';

    }

    
    return (
        <StyledSection style={{ textAlign: 'start' }}>
            <StyledLayoutContainer className="px-4">
                {/*<StyledSectionOneDetails> <span>How it </span>works?</StyledSectionOneDetails>*/}
                <div className="container" style={{maxWidth:'1100px'}}>
                    <div className="row row-cols-md-3">

                        {
                            featureIconItems.map((item, i) => (
                                <div
                                    key={i}
                                data-aos-duration="400" data-aos-delay={item.aos_delay} data-aos="fade-right"
                                className="col py-2 my-2">
                                    <StyledIconCard 
                                    id={i} className="s5-card p-4" 
                                    style={{height: idHover == i ? 'auto' : '210px', transition:'height 0.8s'}}
                                    onMouseMove={(e)=>openCard(e)} onMouseLeave={(e)=>closeCard(e)}
                                    >
                                        <img src={ process.env.PUBLIC_URL + `/images/section6/${item.icon}.svg`} loading="lazy" alt="#" className="s5-image py-2 mb-2" />
                                        <h5 className="my-2">{item.title}</h5>
                                        <p style={
                                            {
                                                visibility:idHover == i ? 'visible' : 'hidden',
                                                opacity:idHover == i ? '1' : '0',
                                                transition: 'visibility 0s, opacity 1s linear'
                                            }}>{item.description}</p>
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