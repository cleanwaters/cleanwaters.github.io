import styled from "styled-components";


export const StyledCWCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
    border-radius: 50px;
    margin-top: 76px;
    min-height: 70vh;
`

export const StyledCapacityDropIconWrapper = styled.div`
position: absolute;
z-index: 100;
    right: 0;
//     top: -4 em;
`

export function CWCard() {
    return (
        <StyledCWCard className="card col">
            <div className="card-body">
                <h5 className="card-title header-title-color my-4">Card title</h5>
                <img src={ process.env.PUBLIC_URL + "/images/genny.svg"} loading="lazy" alt="#" className="ui-image-half-right mb-4" />

                <ul>
                    <li>
                        Homes and offices seeking sustainable water solution
                    </li>
                </ul>
            </div>
        </StyledCWCard>
    )
}