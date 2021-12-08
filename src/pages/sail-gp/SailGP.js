import { NavbarSecond } from '../../components/NavbarSecond';
import { Footer } from "../../sections/Footer";

import React from "react";
import styled from 'styled-components';
import { Col, Container, Image, Row } from 'react-bootstrap';


const StyledJumbotron = styled.div`
    
    background:black;
    height:100vh;
    width:100vw;

    position:relative;
    top:0;
    


    > img {
        width:100%;
        height:100vh;
        object-fit: cover;

        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;

        opacity:0.8;
    }
`

const StyledJumbotronText = styled.div`
    color:white;
    font-family: Dosis;

    width:35%;
    margin:auto auto;
    text-align:center;
    
    position:relative;
    top:230px;

    @media only screen and (max-width: 992px) {
        width:75%;
        top:300px;
    }

    > div {
        margin : 13px 0px;
    }

    > div:first-child {
        font-weight: 800;
        font-size: 48px;
        line-height: 65px;
        color: white;
        font-family: Nunito;
    }

    > div:nth-child(2), div:nth-child(4) {
        font-size: 18px;
        line-height: 24px;
    }

    > div:nth-child(3){
        font-weight: 600;
        font-size: 32px;
    }
`

const StyledRightContent = styled.div`
    display:flex;
    flex-direction:column;

    @media only screen and (min-width: 992px) {
        margin:10px 70px;
    }
    
    > img {
        margin:10px auto;

    }

    > img:first-child {
        height:40%;
        width:50%;
    }

    > img:nth-child(2) {
        height:40%;
        width:30%;
    }
`

const StyledContent = styled.div`
    @media only screen and (min-width: 992px) {
        display:flex;

        > div {
            width:50%;
        }
    }
    

`


export default function SailGP(){
    return (
        <div>
            <NavbarSecond />
            <div>
                <StyledJumbotron>
                    <img src={ process.env.PUBLIC_URL + `/images/sailgp/SAILGP-credit-Bob-Martin-BB602504.jpg`}/>
                    {/* <Navbar/> */}
                    <div
                        data-aos='fade-up'
                        style={{ zIndex: 4, position: 'relative'}}
                        // className='d-md-flex'
                    >
                        <StyledJumbotronText>
                            <div>
                                Clean Waters is a proud sponsor of Sail Grand Prix
                            </div>
                            <div>
                                <div>
                                    Sydney Harbour from 17th to 18th of December 2021, along with KPMG, the NSW Government and Crown.
                                </div>
                                <div>
                                    The race will include competitors from Australia, Denmark, France, Great Britain, Japan, New Zealand, Spain and the United States of America.
                                </div>
                            </div>
                            <div>
                                Clean Waters will have our water machines at the at the Sail GP
                            </div>
                            <div>
                                We will be at the Sail GP Village at Barangaroo. All competitors and spectators are welcome. Come taste the purest water from air generated using solar power – truly a world-first!
                            </div>
                        </StyledJumbotronText>
                    </div>
                </StyledJumbotron>
                <StyledContent>
                    <div style={{padding:0}} className="md-flex">
                        <Image style={{width:'100%'}} src={ process.env.PUBLIC_URL + `/images/sailgp/Map Photo.png`} />
                    </div>
                    <div>
                        <StyledRightContent>
                            <Image src={ process.env.PUBLIC_URL + `/images/sailgp/sail gp logo.png`} />
                            <Image src={ process.env.PUBLIC_URL + `/images/nav_logo.jpg`} />
                        </StyledRightContent>
                    </div>
                </StyledContent>
            </div>
            <Footer/>
        </div>
    )
}