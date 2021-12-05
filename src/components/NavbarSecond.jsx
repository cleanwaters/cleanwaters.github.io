import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navbar.css";
import {useLocation} from "react-router-dom";
import {NavbarItem} from "./NavbarItem";


const navbarLinks = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Our Solution',
        url: '/#/our-solution',
    },
    {
        name: 'Case Studies',
        url: '/#/case-studies',
    },
    {
        name: 'About Us',
        url: '/#/about-us',
    },
    {
        name: 'Our Partners',
        url: '/#/our-partners',
    },
    {
        name: 'Contact Us',
        url: '/#/contact',
    },
]

export function checkUrlActive(navbarUrl, locationPathName) {
    return navbarUrl.includes(locationPathName)
}

export function NavbarSecond() {
    return (
        <Navbar sticky='top' style={{ boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.08)', background: 'white' }} expand="lg">
            {/*todo scrolling not working*/}
            <Container>
                <Navbar.Brand href="">
                    <img style={{ width: '3em' }} src={process.env.PUBLIC_URL + "/images/nav_logo.jpg"} alt="nav_logo" className="img-fluid" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        {
                            navbarLinks.map((navbarItem, index) => (
                                <NavbarItem navbarItem={navbarItem} key={index} />
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
