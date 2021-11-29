import { Nav, Navbar, Container } from "react-bootstrap";
import { } from "./Navbar";


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
        name: 'Contact',
        url: '#/contact',
    },
]



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
                                <Nav.Link className="px-3" key={index} style={{ color: '#0170B9' }} href={navbarItem.url}>{navbarItem.name}</Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
