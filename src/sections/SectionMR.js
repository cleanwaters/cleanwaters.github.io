import { StyledLayoutContainer, StyledSection, StyledCarouselContainer } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CWCard, StyledCapacityDropIconWrapper } from "./CWCard";
import { featureIconItems } from "./sections-data";
import { StyledSectionOneDetails } from "./SectionFive";
import Carousel from "react-multi-carousel";
import { MediaReportItems } from "./sections-data";


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 5
    },
    desktop: {
        breakpoint: { max: 1400, min: 1200 },
        items: 4
    },
    tablet: {
      breakpoint: { max: 1200, min: 992 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 992, min: 464 },
      items: 1
    }
};



export const StyledIconCard = styled.div`
    background: #FFFFFF;
box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
border-radius: 16px;
// padding: 28px 14px;

p {
line-height: 33px;
}
`

export const StyledCardMedia = styled.div`
    // width:17vw;
    height:560px;
    text-align:left;
    margin:auto auto;
    margin:0px 20px;
    font-family:'Nunito';

    // @media screen and (max-width: 1024px) {
    //     width:30vw;
    // }

    > img {
        // width:385px;
        height:320px;
        width:100%;
        object-fit: cover;
    }

    > div > .card-title {
        height:68px;
    }

    > div > .card-text {
        height: 72px;
    }
`

export function SectionMR() {
    return (
        <StyledSection>
            <StyledLayoutContainer className="px-4">
                <StyledSectionOneDetails> <span>Media </span>Report</StyledSectionOneDetails>
                <StyledCarouselContainer>
                    <div>
                    <Carousel responsive={responsive}>
                        {
                            MediaReportItems.map((item, i)=>(
                                <StyledCardMedia
                                data-aos-delay="500" data-aos-duration="1000" data-aos-delay={`${300*i+1}`} data-aos="flip-left"
                                className="card"
                                key={i}
                                >
                                    <img src={ process.env.PUBLIC_URL + `/images/mediareport/${item.image}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}
                                        </h5>
                                        <p className="card-text">{item.description}</p>
                                        <a style={{color:"#007bff"}} href={item.link} target="_blank">Read more</a>
                                    </div>
                                </StyledCardMedia>
                            ))
                        }
                    </Carousel>
                    </div>
                </StyledCarouselContainer>
            </StyledLayoutContainer>

        </StyledSection>
    )
}




// #EEF9FF