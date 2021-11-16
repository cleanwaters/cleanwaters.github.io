import { StyledLayoutContainer, StyledSection } from "../components/styled-shared";
import styled from "styled-components";


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

export const StyledWhatWeDoDetails = styled.div`
    border-left: 1em solid #00C0FF !important;
`

export function SectionFive() {
    return (
        <StyledSection>
            <StyledLayoutContainer className="px-4">
                <StyledSectionOneDetails> <span>How it </span>works?</StyledSectionOneDetails>

                <h3 ><span className="text-blue">
                    Patented heat-exchange technology in all
                </span> our products</h3>

                <p>
                    At the heart of Watergen’s product line lies the unique, patented GENius heat exchange technology.

                </p>
                <p>
                    It enables the air around us to turn into pure, fresh drinking water – energy efficiently.
                </p>

                <p>
                    <span className="text-blue"> Watergen’s technology extracts </span> water from the air by enabling the air to move fast into the patented Genius system in a significantly short time, ensuring greater efficiency and thus using less energy.
                </p>

                <p>
                    <span className="text-blue">Unique, energy-efficient heat exchange module</span>, using condensation as a means of producing fresh water. One liter of water costs 7-15 cents, which depends on local electricity costs.
                </p>

                <p>
                    <span className="text-blue">Highly scalable and customizable drinking water solution </span> for a wide range of daily quantities, configured to any production size. By using this technology, Watergen can supply fresh, clean drinking water to an entire town or village, or it can be scaled down to supply enough premium drinking water for private homes or offices.
                </p>


            </StyledLayoutContainer>

        </StyledSection>
    )
}




// #EEF9FF