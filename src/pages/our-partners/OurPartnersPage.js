import React, {useState} from "react";
import SectionOne from "./SectionOne";
import {StyledSectionOneDetails} from "../../sections/SectionFour";
import {ourPartnersData} from "../../data/ourPatnersData";
import {Nav} from "react-bootstrap";
import {StyledSectionOneP} from "../../components/typography/Paragraph";
import {StyledSectionLightP} from "../about-us/SectionOne";
// import SectionOne from "./SectionOne";
// import {aboutUsData} from "../../data/aboutUsData";
// import OSSectionOne from "./OSSectionOne";
// import {caseStudiesData} from "../../data/caseStudies";


export default function OurPartnersPage({ourPartners}){

    const [selectedArticle, setSelectedArticle] = useState(ourPartnersData.articleTabs[0])
    return(
        <div className="container-fluid p-0">
            <section className="text-center d-flex justify-content-center align-items-center"
                     style={{
                        color: 'white',
                        minHeight: '60vh',
                        backgroundImage: `linear-gradient(
                          rgba(0, 0, 0, 0.5), 
                          rgba(0, 0, 0, 0.5)
                        ),url(${ourPartnersData.headerImage})`,
                        backgroundRepeat: 'no-repeat, repeat'
                     }}
            >
                <div className="mx-md-5">
                    <StyledSectionOneDetails style={{color: 'white'}}>{ourPartnersData.title}</StyledSectionOneDetails>
                    <p>{ourPartnersData.subTitle}</p>
                </div>
            </section>


            <section>
                <div className="d-md-flex justify-content-around">
                    {
                        ourPartnersData.partnerLogos.map(logo => (
                            <img src={logo.image} loading="lazy" className="img-fluid" />
                        ))
                    }
                </div>
            </section>

            <Nav  fill variant="tabs" className="px-5">
                {
                    ourPartnersData.articleTabs.map((article, index) => (
                        <Nav.Item key={index}>
                            <Nav.Link style={ selectedArticle.tabNumber === article.tabNumber ?{background: '#081F46', color: 'white'} : {}} active={selectedArticle.tabNumber === article.tabNumber} onClick={() => setSelectedArticle(article)}>{article.tabTitle}</Nav.Link>
                        </Nav.Item>
                    ))
                }

            </Nav>

            <div className="d-md-flex text-left justify-content-center align-items-center p-4" style={{minHeight: '80vh'}}>
                <div className="d-md-flex text-left flex-row-reverse">
                    <div className="col-md-6">
                        <img src={selectedArticle.image} className="img-fluid" height={'150px'} />
                    </div>
                                        <div className="col-md-6">

                        <StyledSectionOneP className="m-0">{selectedArticle.articleTitle}</StyledSectionOneP>
                        <StyledSectionOneP className="m-0">{selectedArticle.subTitle}</StyledSectionOneP>

                        {
                            selectedArticle.articleTexts.map(pText => (
                                <StyledSectionOneP>{pText}</StyledSectionOneP>
                            ))
                        }
    </div>

                </div>
            </div>

            <section
                className="text-center d-flex justify-content-center align-items-center"
                style={{
                        color: 'white',
                        height: '380px',
                        backgroundImage: `linear-gradient(
                          rgba(0, 0, 0, 0.5), 
                          rgba(0, 0, 0, 0.5)
                        ),url(${ourPartnersData.lastSection.image})`,
                        backgroundRepeat: 'no-repeat, repeat',
                    marginBottom: '10em'
                     }}
            >
                <div className="mx-md-5">
                    <StyledSectionOneDetails style={{color: 'white'}} >{ourPartnersData.lastSection.title}</StyledSectionOneDetails>
                    <p>{ourPartnersData.lastSection.text}</p>
                </div>
            </section>
        </div>
    )
}
