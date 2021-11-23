import { StyledLayoutContainer } from "../components/styled-shared";
import { Button } from "../components/button/Button";
import styled from "styled-components";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";



export const StyledHeaderH1 = styled.h1`
    font-weight: 800;
    font-size: 48px;
    line-height: 65px;
    color:white;
    font-family:Nunito; 
`


export const StyledSectionOneP = styled.p`
font-weight: 600;
font-size: 36px;
line-height: 55px;
font-family:Dosis;

// color: #081F46;
color:white;
margin-bottom:40px !important;
`


export const StyledSectionOneDetails = styled.div`
  // padding: 20em 7em;
  margin:21em 0 0 7em;
`


const StyledNavbar = styled.div`
  position:absolute;
  top:50px;
  color:white;
  width:100%;
  text-align:center;
  z-index:4;

  // Text
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;


  > div {
    display:flex;
    align-items:center;
  }

  > div > div:first-child{
    width:10%;
  }

  > div > div:nth-child(2){
    display:flex;
    justify-content:center;
    width:90%;
    text-align:center;
    
    position:relative;
    right:5vw;
  }

  > div > div:nth-child(2) > div {
    margin:0 40px;
  }

  > div > div:nth-child(2) > div:hover {
    text-decoration:underline;
    cursor:pointer;
  }
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
    <>
    
    <div class="jumbotron jumbotron-fluid" style={{height:'100vh', width:'100vw', background:'black'}}>
      <video autoPlay muted loop poster="https://dummyimage.com/900x400/000/fff">    
      <source src={process.env.PUBLIC_URL + `/videos/production ID_3958714 (online-video-cutter.com).mp4`} type="video/mp4"/>
      </video>
      {/* <Navbar/> */}
      <StyledNavbar>
        <div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/nav-logo.svg"} loading="lazy" alt="image" className="ui-image-half-right" />
          </div>
          <div>
            <div>Home</div>
            <div>Our Solution</div>
            <div>Case Studies</div>
            <div>About Us</div>
            <div>Our Partners</div>
            <div>Contact</div>
          </div>
        </div>
      </StyledNavbar>
      <StyledSectionOneDetails data-aos="fade-up" style={{ zIndex:4, position: 'relative', width:'43%'}}>
            <StyledHeaderH1 className="header-title-color" style={{fontSize:'48px'}}>Clean Water</StyledHeaderH1>
            <StyledSectionOneP className="mb-3">
              We use Air as a natural raw material to make top-quality drinking water through our
              atmospheric extraction technology
            </StyledSectionOneP>
            <div className="d-flex">

              <Button size="large" label="Our product" style={{ color:'white', fontFamily:'Nunito', marginRight: '1em', padding:'1.2em 3.6em', background:'#046EB6' }} />
              <Button size="large" label="About us" style={{ color:'white', fontFamily:'Nunito', borderColor:'white', padding:'1.2em 3.6em' }}/>
            </div>
      </StyledSectionOneDetails>
    </div>
    </>
  )
}




// #EEF9FF