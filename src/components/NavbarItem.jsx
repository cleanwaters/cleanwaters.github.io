import styled from "styled-components";

import {Link, useLocation} from "react-router-dom";
import {Nav} from "react-bootstrap";


export function NavbarItem({navbarItem}) {
  const location = useLocation();
    // console.log('history', location)
  return (
      <>
        {
          location.pathname === '/' ? (
    <Nav.Link className={`px-3 ${navbarItem.url === '/' ? 'nav_active': null}`} style={{ color: '#0170B9' }} href={navbarItem.url}>
      {navbarItem.name}
    </Nav.Link>
          ) : (
    <Nav.Link className={`px-3 ${navbarItem.url.includes(location.pathname) ? 'nav_active': null}`} style={{ color: '#0170B9' }} href={navbarItem.url}>
      {navbarItem.name}
    </Nav.Link>
          )
        }


      </>

  )
}





// (location.pathname === '/' && navbarItem.url === '/') ? (
//     <Nav.Link
//         className={`px-3 ${navbarItem.url.includes(location.pathname) ? 'nav_active': null}`}
//         key={index} style={{ color: '#0170B9' }} href={navbarItem.url}>{navbarItem.name}
//     </Nav.Link>
//     ) :
//     (
//     <Nav.Link className={`px-3 ${navbarItem.url.includes(location.pathname) ? 'nav_active': null}`} key={index} style={{ color: '#0170B9' }} href={navbarItem.url}>
//         {navbarItem.name}
//     </Nav.Link>
//     )