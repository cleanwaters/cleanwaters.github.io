import { NavbarSecond } from '../../components/NavbarSecond';
import { Footer } from "../../sections/Footer";

import React from "react";
import styled from 'styled-components';


const StyledJumbotron = styled.div`
    margin-bottom:80vh;
    > img {
        width:100%;
        height:100vh;
        object-fit: cover;

        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
    }
`

const StyledJumbotronText = styled.div`
    color:white;
    font-family: Dosis;

    width:35%;
    margin:auto auto;
    text-align:center;

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
                        style={{ zIndex: 4, position: 'relative', marginTop: '10vw' }}
                        className='d-md-flex'
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
            </div>
            <Footer/>
        </div>
    )
}