import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import { Navbar } from "./components/Navbar";

import 'aos/dist/aos.css';
import styled from "styled-components";
import Aos from 'aos';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';


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

        window.onbeforeunload = function () {
            window.scrollTo({
                left:0
            })
        }
    }, [])

    return (
        <div>
            <Navbar/>
            <LandingPage/>
        </div>
    );
}

export default App;
