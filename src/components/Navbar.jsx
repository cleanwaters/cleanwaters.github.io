import {navUrls} from "./navbar-items-data";
import {StyledNavLink, StyledNavWrapper, styledNavWrapper} from "./styled-shared";

export function Navbar() {
    return (
        <StyledNavWrapper className="navbar navbar-expand-lg mt-4 mb-4">
            <img src="images/nav-logo.svg" loading="lazy" alt="#" className="ui-image-half-right" />

            <div className="collapse navbar-collapse">
                {/*<div className="navbar-nav">*/}
                {/*    <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>*/}
                {/*    <a className="nav-link" href="#">Features</a>*/}
                {/*    <a className="nav-link" href="#">Pricing</a>*/}
                {/*    <a className="nav-link disabled">Disabled</a>*/}
                {/*</div>*/}
            </div>
                <div className="navbar-nav">
                    {navUrls.map(navurl => (
                        <StyledNavLink className="nav-link m-4" href={navurl.url}>{navurl.title}</StyledNavLink>
                    ))}
                    {/*<a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>*/}
                    {/*<a className="nav-link" href="#">Features</a>*/}
                    {/*<a className="nav-link" href="#">Pricing</a>*/}
                    {/*<a className="nav-link disabled">Disabled</a>*/}
                </div>
        </StyledNavWrapper>
    )
}