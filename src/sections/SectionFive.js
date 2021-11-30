import { StyledLayoutContainer, StyledSection } from "../components/styled-shared";
import styled from "styled-components";
import {StyledP32, StyledP36} from "../components/typography/Paragraph";


export const StyledSectionOneDetails = styled.h2`
font-weight: bold;
font-size: 48px !important;
line-height: 61px;
color: #081F47;
margin-bottom: 1em;
font-family: Nunito;

span {
    color: #00C0FF;
}
`

export const StyledSectionFourContainer = styled.div`
padding:0px 22vw;
font-size:32px;
font-family: Nunito;
font-style: normal;
h3 {
    font-size:36px;
}


div > p {
    margin-bottom:0px;
}

div {
    margin: 2.4rem 0px;
}

`

const StyledDetails = styled.div`
    font-size: 32px;
    @media screen and (min-width: 768px) {
        width: 68%;
    }
`
export function SectionFive() {
    return (
        <StyledSection className="d-flex justify-content-center">
            <StyledDetails>
                <StyledSectionOneDetails data-aos="fade-down" data-aos-duration="1000"> <span>How it </span>works?</StyledSectionOneDetails>
                <div>

                    <StyledP36 data-aos="fade-in" data-aos-duration="1000" className="text_bold"><span className="text_color_primary">
                        Patented heat-exchange technology in all
                    </span> our products</StyledP36>

                    <div data-aos="fade-in" data-aos-duration="1000" style={{fontWeight:600}}>
                        <StyledP32>
                            At the heart of Watergen’s product line lies the unique, patented Genius heat exchange technology. It enables the air around us to turn into pure, fresh drinking water – energy efficiently.
                        </StyledP32>

                    </div>


                    <StyledP32 data-aos="fade-in" data-aos-duration="1000" style={{margin:'2rem 0px'}}>
                        <span className="text_color_primary text_bold"> Watergen’s technology extracts </span> water from the air by enabling the air to move fast into the patented Genius system in a significantly short time, ensuring greater efficiency and thus using less energy.
                    </StyledP32>

                    <StyledP32 data-aos="fade-in" data-aos-duration="1000" style={{margin:'2rem 0px'}}>
                        <span className="text_color_primary text_bold">Unique, energy-efficient heat exchange module</span>, using condensation as a means of producing fresh water. One liter of water costs 7-15 cents, which depends on local electricity costs.
                    </StyledP32>

                    <StyledP32 data-aos="fade-in" data-aos-duration="1000" style={{margin:'2rem 0px 0px 0px'}}>
                        <span className="text_color_primary text_bold">Highly scalable and customizable drinking water solution </span> for a wide range of daily quantities, configured to any production size. By using this technology, Watergen can supply fresh, clean drinking water to an entire town or village, or it can be scaled down to supply enough premium drinking water for private homes or offices.
                    </StyledP32>

                </div>
            </StyledDetails>

        </StyledSection>
    )
}




// #EEF9FF