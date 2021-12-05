import styled, { css } from 'styled-components'

export const StyledNavWrapper = styled.nav`
    opacity:1;
    color:white;
`

export const StyledNavLink = styled.a`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
`

export const StyledLayoutContainer = styled.div`
    padding-left: var(--ui-layout-container);
    padding-right: var(--ui-layout-container);
`

export const StyledSection = styled.section`
    padding-bottom: 5rem;
    padding-top: 5rem;
    text-align: center;
    fontFamily: Nunito;
`

export const StyledCarouselContainer = styled.div`
    // width:1300px; 

    > div:first-child{
        // width:1140px;
        overflow:visible !important;
    }

    .react-multiple-carousel__arrow--right {
        right: calc(-0% + 1px);
        z-index:1000;
    }

    .react-multiple-carousel__arrow--left {
        left: calc(-0% + 1px);
        z-index:1000;
    }
`


