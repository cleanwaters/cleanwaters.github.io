import { StyledLayoutContainer } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { useEffect } from "react";




export const StyledHeaderH1 = styled.h1`
    font-weight: 800;
    font-size: 48px;
    line-height: 65px;
    color:white;
`


export const StyledSectionOneP = styled.p`
font-weight: 600;
font-size: 36px;
line-height: 55px;

// color: #081F46;
color:white;
`


export const StyledSectionOneDetails = styled.div`
padding: 4em 4em;
`


export function SectionOne() {
  useEffect(()=>{
    
  })

  return (
    // <section className="p-4" style={{ borderRadius: '50px' }}>
    //   <StyledLayoutContainer className="px-4">
    //     <div className="d-md-flex">
    //       <StyledSectionOneDetails data-aos="fade-up">
    //         <StyledHeaderH1 className="header-title-color">Clean Water</StyledHeaderH1>
    //         <StyledSectionOneP>
    //           We use Air as a natural raw material to make top-quality drinking water through our
    //           atmospheric extraction technology
    //         </StyledSectionOneP>
    //         <div className="d-flex">

    //           <Button primary size="large" label="Our product" style={{ marginRight: '1em' }} />
    //           <Button size="large" label="About us" />
    //         </div>
    //       </StyledSectionOneDetails>
    //       {/* <img src={process.env.PUBLIC_URL + "/images/water-glass.svg"} loading="lazy" alt="#" className="ui-image-half-right img-fluid" /> */}
    //     </div>
    //   </StyledLayoutContainer>
    // </section>
    <div class="jumbotron jumbotron-fluid" style={{height:'790px', background: '#EEF9FF'}}>

      <video autoPlay muted loop poster="https://dummyimage.com/900x400/000/fff">    
      <source src={process.env.PUBLIC_URL + `/videos/production ID_3958714.mp4`} type="video/mp4"/>
      </video>

      <StyledSectionOneDetails data-aos="fade-up" style={{ zIndex:4, position: 'relative', width:'45%'}}>
            <StyledHeaderH1 className="header-title-color">Clean Water</StyledHeaderH1>
            <StyledSectionOneP>
              We use Air as a natural raw material to make top-quality drinking water through our
              atmospheric extraction technology
            </StyledSectionOneP>
            <div className="d-flex">

              <Button primary size="large" label="Our product" style={{ marginRight: '1em' }} />
              <Button size="large" label="About us" />
            </div>
          </StyledSectionOneDetails>
    </div>
  )
}




// #EEF9FF