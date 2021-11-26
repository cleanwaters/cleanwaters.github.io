import React from "react";
import styled from "styled-components";

import { Carousel } from "react-bootstrap";


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

export default function SectionTwoCarouselItem({ image, product, text }){
    return (
        // <Carousel.Item>
            <StyledSectionCardDefault className="card" style={{margin: '0 15em'}}>
                <div className="card-body d-flex align-items-center">
                    {/*<div className="d-flex align-items-center" style={{height: '100%'}}>*/}
                        <div className="align-self-center px-3">
                            <img  style={{height: '8em'}} src={process.env.PUBLIC_URL + `/images/${image}`} loading="lazy" alt="#" className="img-fluid" />
                        </div>

                        <div className="flex-grow-1 align-self-center">
                            <StyledSectionCarouselP>
                                <span>{product}</span> – {text}
                            </StyledSectionCarouselP>
                        </div>

                    {/*</div>*/}
                </div>
            </StyledSectionCardDefault>

        // </Carousel.Item>
    )
}