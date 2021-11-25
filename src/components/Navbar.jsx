import styled from "styled-components";

import { Link } from "react-router-dom";


const StyledNavbar = styled.div`

img {
  width: 3em;
}

li {
  padding: 1em;
  color: #0170B9;
  
}
.active {
  font-weight: bold;
  color: #0170B9;
}
`


export function Navbar() {
  return (
    <StyledNavbar className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">
        <img src={process.env.PUBLIC_URL + "/images/nav_logo.jpg"} loading="lazy" alt="image" className="img-fluid" />
      </div>
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item link active">
            <Link className to="/">Home</Link>
          </li>

          <li className="nav-item">
            Our Solution
          </li>

          <li className="nav-item">
            Case Studies
          </li>

          <li className="nav-item">
            About Us
          </li>

          <li className="nav-item">
            Our Partners
          </li>
        </ul>
      </div>

    </StyledNavbar>
  )
}



