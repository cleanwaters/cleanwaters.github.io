import SectionTwoCarouselItem from "./SectionTwoCarouselItem";

import { StyledLayoutContainer, StyledSection } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCoffee } from '@fortawesome/free-solid-svg-icons'


import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { StyledBackgroundPattern } from "../App";
import {SectionTwo} from "./SectionTwo";
import {sectionTwoCarouselItems} from "./SectionTwoBottleAnimation";



export const StyledSectionCardDefault = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
    border-radius: 50px;
    // height:220px;
    
`


export const StyledSectionCarouselP = styled.p`
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    font-family:Nunito;

    span {
        color: #0170B9;
    }
`

export default function SectionTwoCarousel({ image, product, text }){
    return (
        <section className="container-fluid my-5">
            <Carousel
                // activeIndex={2}
                variant="dark"
                prevLabel={''}
                nextLabel={''}
                indicators={false}
                prevIcon={<FontAwesomeIcon className="m-0" color="black" size="2x" icon={faAngleLeft} />}
                nextIcon={<FontAwesomeIcon color="black" size="2x" icon={faAngleRight} />}
                style={{width: '0 !important'}}
                data-aos="fade-down"

            >
              {sectionTwoCarouselItems.map(function(item, i){
                return (
                  <Carousel.Item key={i}>
                    <SectionTwoCarouselItem
                      image={item.image}
                      product={item.product}
                      text={item.text}
                      />
                  </Carousel.Item>
                  )
              })}

            </Carousel>
        </section>

    )
}