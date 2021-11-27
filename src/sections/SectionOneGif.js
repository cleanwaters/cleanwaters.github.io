import { Button } from "../components/button/Button";
import styled from "styled-components";
import { useEffect } from "react";
import {StyledSectionOneP, StyledSectionOneTitle} from "../components/typography/Paragraph";



export const StyledHeaderH1 = styled.h1`
    font-weight: 800;
    font-size: 48px;
    line-height: 65px;
    color:white;
    font-family:Nunito; 
`


// export const StyledSectionOneP = styled.p`
// font-weight: 600;
// font-size: 36px;
// line-height: 55px;
// font-family:Dosis;
//
// // color: #081F46;
// color:white;
// margin-bottom:40px !important;
// `


export const StyledSectionOneDetails = styled.div`
  // padding: 20em 7em;
  // margin:20vw 0 0 7em;
`


export function SectionOneGif() {
  return (
    <section className="container-fluid d-md-flex align-items-center p-4" style={{background:'#EEF9FF'}}>
      {/*<video autoPlay muted loop>*/}
      {/*<source src={process.env.PUBLIC_URL + `/videos/production ID_3958714 (online-video-cutter.com).mp4`} type="video/mp4"/>*/}
      {/*</video>*/}
      {/*  <img src="..." className="img-fluid" alt="...">*/}

      <StyledSectionOneDetails>
            <StyledSectionOneTitle className="header-title-color" style={{fontSize:'48px'}}>Clean Water</StyledSectionOneTitle>
            <StyledSectionOneP className="mb-3">
              We use Air as a natural raw material to make top-quality drinking water through our
              atmospheric extraction technology
            </StyledSectionOneP>
            <div className="d-flex">

              <Button primary={true} size="large" label="Our product"/>
              <Button size="large" label="About us"/>
            </div>
      </StyledSectionOneDetails>

        <div className="col-6">
            <img style={{opacity: 0.4}} src={process.env.PUBLIC_URL + "/videos/water_glass.gif"} alt="nav_logo" className="img-fluid" />
        </div>
    </section>
  )
}




// #EEF9FF