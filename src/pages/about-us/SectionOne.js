import React from "react";
import {StyledSectionOneDetails} from "../../sections/SectionFour";
import {StyledSectionOneP, StyledSectionSubtitle} from "../../components/typography/Paragraph";
import {StyledCWCard} from "../../sections/CWCard";
import styled from "styled-components";



export const StyledSectionLightP = styled.p`
    color: var(--ui-color-accent);
    font-weight: 600;
    font-family: Nunito;
    font-style: normal;
    text-align: center;
`



export default function SectionOne({aboutUs}){
    return(
        <section className="text-center">
            <StyledSectionOneDetails
                data-aos-anchor-placement="top-center"
            ><span>About </span> us</StyledSectionOneDetails>
            <StyledSectionSubtitle>{aboutUs.subTitle}</StyledSectionSubtitle>

            <div className={`d-md-flex`}>
                <div className="col-md-6">
                    {
                        aboutUs.sectionOne.details.map(pText => (
                            <StyledSectionOneP>{pText}</StyledSectionOneP>
                        ))
                    }

                </div>

                <div className="col-md-6">
                    <img src={aboutUs.sectionOne.image} className="img-fluid" />
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {
                        aboutUs.teamList.map(teamItem => (
                            <div className="col-md-4" style={{padding: '2em 4em'}}>
                                <StyledCWCard style={{padding: '4em 0', margin: '0'}} className="m-0">
                                    <img src={teamItem.image} className="img-fluid" height={'150px'} />
                                    <div style={{position: 'relative'}}>
                                        { teamItem.subName ? (
                                            <>
                                                <StyledSectionOneP className="m-0">{teamItem.name}</StyledSectionOneP>
                                                <StyledSectionLightP className="text-center" style={{position: 'absolute', color: '#767676'}}>{teamItem.subName}</StyledSectionLightP>
                                            </>
                                        ) : (
                                            <StyledSectionOneP >{teamItem.name}</StyledSectionOneP>
                                        )}
                                    </div>
                                </StyledCWCard>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
