import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import { Navbar } from "./components/Navbar";
import styled from "styled-components";
import { SectionOne } from "./sections/SectionOne";
import { SectionTwo, StyledSectionOneDetails } from "./sections/SectionTwo";
import { SectionThree } from "./sections/SectionThree";
import { SectionFour } from "./sections/SectionFour";
import { SectionFive } from "./sections/SectionFive";
import { SectionSix } from "./sections/SectionSix";
import { SectionMR } from "./sections/SectionMR";
import {SectionAR} from "./sections/SectionAR";
import {Footer} from "./sections/Footer";
import { SectionQW } from './sections/SectionQW';
import Video from './sections/Video';

import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';



export const StyledBackgroundPattern = styled.div`
    position:absolute;
    width:100vw;
    margin:0;
    padding:0;
    z-index:-300;

    > img {
      width:100vw;
      left:0;
      margin:0;
      padding:0;
    }
`



function App() {
    
    useEffect(()=>{
        Aos.init({ duration: 500, delay:"50" })
    }, [])

    return (
        <div>
        
        <div className="container-fluid" style={{padding:'1px'}}>
            {/*<Button/>*/}
            {/* <Navbar /> */}
            <SectionOne />
            {/*second section*/}

            
            <SectionTwo />

            {/*section 3*/}
            <SectionQW/>

            <SectionThree />


            <SectionFour />

            <SectionFive />

            <Video
            video={'Watergen - how it works_.mp4'}
            />

            <SectionSix />

            <SectionMR />

            {/*section 9*/}
            <SectionAR />

            {/*section 10*/}
            <Footer />

        </div>
        <StyledBackgroundPattern style={{top:'4500px'}}>
            <img style={{width:'120%', height:'10%'}} src={process.env.PUBLIC_URL + "/images/background/pattern3.svg"} loading="lazy" alt="image" className="ui-image-half-right" />
        </StyledBackgroundPattern>
        <StyledBackgroundPattern style={{top:'5600px', left:'0%'}}>
            <img style={{width:'100%', height:'10%'}} src={process.env.PUBLIC_URL + "/images/background/pattern4.svg"} loading="lazy" alt="image" className="ui-image-half-right" />
        </StyledBackgroundPattern>
        <StyledBackgroundPattern style={{top:'7200px', left:'90'}}>
            <img style={{marginLeft:'70%', width:'315px', height:'388px'}} src={process.env.PUBLIC_URL + "/images/background/pattern5.svg"} loading="lazy" alt="image" className="ui-image-half-right" />
        </StyledBackgroundPattern>
        <StyledBackgroundPattern style={{top:'7400px', left:'0%'}}>
            <img style={{marginLeft:"-80px", width:'465px', height:'545px'}}  src={process.env.PUBLIC_URL + "/images/background/pattern6.svg"} loading="lazy" alt="image" className="ui-image-half-right" />
        </StyledBackgroundPattern>
        </div>
    );
}

export default App;
