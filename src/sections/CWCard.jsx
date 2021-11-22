import styled from "styled-components";


export const StyledCWCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
    border-radius: 50px;
    margin-top: 76px;
    height:55em;
    padding:0px 20px;

`

export const StyledCapacityDropIconWrapper = styled.div`
position: absolute;
z-index: 100;
    right: 0;
//     top: -4 em;
`


export const StyledListText = styled.ul`
    list-style:none;
    font-family:Nunito;

    li::before {
        content: "•"; 
        color: #0170B9;
        margin-left: -0.8em;
        margin-right: 0.4em;
        font-size: 32px;
    }

    li {
        color:#081F46
        ;
        text-align:left !important;
        font-size:20px;
        line-height:27px;
        margin-bottom:1.2rem;
    }
`

export function CWCard({ title, listText, image }) {
    return (
        <StyledCWCard className="card col">
            <div className="card-body">
                <h5 className="card-title header-title-color my-4" style={{fontSize:'36px'}} >{ title }</h5>
                <img style={{padding:'10px', height:'150px'}} src={ process.env.PUBLIC_URL + `/images/${image}`} loading="lazy" alt="#" className="ui-image-half-right mb-4" />

                <StyledListText>
                    {listText.map(function(item, i){
                        return (
                            <li key={i}>{item}</li>
                        )
                    })}
                </StyledListText>
            </div>
        </StyledCWCard>
    )
}