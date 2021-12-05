import React from "react";
import {StyledCWCard, StyledListText} from "../../sections/CWCard";


export default function OurSolutionCard({ title, listText, image }){
    return(
        <StyledCWCard className="card col">
            <div className="card-body">
                <h5 className="card-title header-title-color my-4" style={{ fontSize: '36px' }} >{title}</h5>
                <img style={{ padding: '10px', height: '150px', width: '300px' }} src={process.env.PUBLIC_URL + `/images/${image}`} loading="lazy" alt="#" className="ui-image-half-right mb-4" />

                <StyledListText className="mb-4">
                    {listText.map(function (item, i) {
                        return (
                            <li key={i}>
                                {item}
                            </li>
                        )
                    })}
                </StyledListText>
            </div>
        </StyledCWCard>
    )
}
