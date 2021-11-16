import {StyledLayoutContainer} from "../components/styled-shared";
import {Button} from "../components/button/Button";
import styled from "styled-components";




export const StyledHeaderH1 = styled.h1`
    font-weight: 800;
    font-size: 48px;
    line-height: 65px;
    
    color: #0170B9;
`


export const StyledSectionOneP = styled.p`
font-weight: 600;
font-size: 36px;
line-height: 55px;

color: #081F46;
`


export const StyledSectionOneDetails = styled.div`
padding: 8em 4em 2em 4em;
`


export function SectionOne() {
    return (
      <section className="p-4" style={{background: '#EEF9FF'}}>
        <StyledLayoutContainer className="px-4">
          <div className="d-md-flex">
            <StyledSectionOneDetails >
              <StyledHeaderH1>Clean Water</StyledHeaderH1>
              <StyledSectionOneP>
                  We use Air as a natural raw material to make top-quality drinking water through our
atmospheric extraction technology
              </StyledSectionOneP>
              <div className="d-flex">

                  <Button primary size="large" label="Our product" style={{marginRight: '1em'}}/>
                <Button size="large" label="About us"/>
              </div>
            </StyledSectionOneDetails>
            <img src="images/water-glass.svg" loading="lazy" alt="#" className="ui-image-half-right img-fluid" />
          </div>
        </StyledLayoutContainer>
      </section>
    )
}




// #EEF9FF