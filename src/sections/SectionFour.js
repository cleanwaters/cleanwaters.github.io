import { StyledSection } from "../components/styled-shared";
import styled from "styled-components";
import { CWCard, StyledCapacityDropIconWrapper } from "./CWCard";
import {targetMarketProduct} from "../data/targetMarketProduct";


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
    top:50%;
    z-index:300;
    width:100%;
    font-family:Dosis;
    color:white;
    right: 12px;

    div:first-child {
        font-size:12px;
        margin:0 0;
        position:relative;
        left:14%;
    }

    div:nth-child(2) {
        font-size:20px;
        position:relative;
    }
`

export const StyledWhatWeDoDetails = styled.div`
    border-left: 1em solid #00C0FF !important;
`

export function SectionFour() {
    return (
        <StyledSection className="px-5">
                <StyledSectionOneDetails data-aos-anchor-placement="top-center"> <span> Target Market and </span> Product Line</StyledSectionOneDetails>
                <div className="row" >
                    <div className="container" style={{maxWidth:'1470px'}}>
                        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 mx-2">
                            {
                                targetMarketProduct.map((item, i) => (
                                    <div data-aos="fade-in" data-aos-delay={150*(i+1)} style={{ position: 'relative', padding: '32px' }} key={i}>
                                        
                                        <StyledCapacityDropIconWrapper>
                                            <div>
                                                <img src={process.env.PUBLIC_URL + "/images/capacity-drop.svg"} loading="lazy" alt="#" className="ui-image-half-right" />
                                                <StyledCardTopRightText>
                                                    <div>Capacity</div>
                                                    <div style={{left:'1vw'}}>{item.capacity} L</div>
                                                </StyledCardTopRightText>
                                            </div>
                                        </StyledCapacityDropIconWrapper>

                                        <CWCard
                                        title={item.title}
                                        listText={item.targets}
                                        image={item.image}
                                        >

                                        </CWCard>
                                    </div>

                                ))
                            }
                        </div>
                    </div>


                </div>
        </StyledSection>
    )
}
