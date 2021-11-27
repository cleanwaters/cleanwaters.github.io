import React from "react";
import {StyledSectionOneDetails} from "../../sections/SectionFour";
import OurSolutionCard from "./OurSolutionCard";
import {CWCard, StyledCWCard, StyledListText} from "../../sections/CWCard";
import {targetMarketProduct} from "../../data/targetMarketProduct";


export default function OSSectionOne(){
    return(
        <section
            style={{backgroundImage: `url(/images/background/Ellipse13.svg)`, minHeight: '100vh', backgroundRepeat: 'no-repeat, repeat'}}
            className="mt-5 container-fluid text-center pt-5">
            <StyledSectionOneDetails data-aos-anchor-placement="top-center"> <span>Our </span> Solution</StyledSectionOneDetails>
            <div className="row">
            {
                targetMarketProduct.map((item, i) => (
                    <div className="col-md-4">
                        <StyledCWCard className="card mt-4">
                            <div className="card-body">
                                <div style={{minHeight: '25em'}}>
                                    <h5 className="card-title header-title-color my-4" style={{ fontSize: '36px' }} >{item.title}</h5>
                                    <img style={{ padding: '10px', width: '100%' }} src={process.env.PUBLIC_URL + `/images/${item.image}`} loading="lazy" className="ui-image-half-right mb-4" />
                                </div>

                                <StyledListText className="mb-4">
                                    {item.detailTargets.map(function (item, i) {
                                        return (
                                            <li key={i}>
                                                {item}
                                            </li>
                                        )
                                    })}
                                </StyledListText>
                            </div>
                        </StyledCWCard>
                    </div>
                ))
            }
            </div>

        </section>
    )
}
