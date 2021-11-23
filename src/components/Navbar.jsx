import styled from "styled-components";

import { Link } from "react-router-dom";


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

    background: #FFFFFF;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
    border-radius: 150px;
    width: 80vw;
    height: 94px;
    margin: auto auto;
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

  > div > div:nth-child(2) > div, a {
    margin:0 40px;
    color:#0170B9 !important;
  }

  > div > div:nth-child(2) > div:hover {
    text-decoration:underline;
    cursor:pointer;
  }
`


export function Navbar() {
    return (
        <StyledNavbar>
        <div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/nav-logo.svg"} loading="lazy" alt="image" className="ui-image-half-right" />
          </div>
          <div>
            <div><Link to="/">Home</Link></div>
            <div>Our Solution</div>
            <div>Case Studies</div>
            <div>About Us</div>
            <div>Our Partners</div>
            <div><Link to="/contact">Contact</Link></div>
          </div>
        </div>
      </StyledNavbar>
    )
}