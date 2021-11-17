import SectionTwoCarouselItem from "./SectionTwoCarouselItem";

import {StyledLayoutContainer, StyledSection} from "../components/styled-shared";
import {Button} from "../components/button/Button";
import styled from "styled-components";
import {Carousel} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight, faCoffee} from '@fortawesome/free-solid-svg-icons'
// font-family: Dosis;
// font-style: normal;
// font-weight: bold;
// font-size: 48px;
// line-height: 61px;
// /* identical to box height */
//
//
// color: #00C0FF;



export const StyledSectionOneDetails = styled.h2`
  font-weight: bold;
  // font-size: 48px;
  line-height: 61px;
  color: #081F47;
  margin-bottom: 1em;

  span {
  color: #00C0FF;
}
`


const listCarouselItem = [
  {
    image : 'genny.svg',
    product : 'Genny',
    text : 'Saves up to 18,250 plastic bottles of water a year'
  },
  {
    image : 'genm1.svg',
    product : 'Gen M1',
    text : 'Saves up to 134,000 plastic bottles of water a year'
  },
  {
    image : 'genm.svg',
    product : 'Gen M',
    text : 'Saves up to 547,500 plastic bottles of water a year'
  },
  {
    image : 'genl.svg',
    product : 'Gen L',
    text : 'Saves up to 3,650,000 plastic bottles of water a year'
  }
]



export function SectionTwo() {
    return (
      <StyledSection>
        <StyledLayoutContainer className="px-4">

                    <StyledSectionOneDetails> <span> How many plastic bottles</span> can you save?</StyledSectionOneDetails>
                    {/*<p className="ui-text-intro">Lorem ipsum dolor sit amet.</p>*/}

                    <Carousel
                        variant="dark"
                        prevLabel={''}
                        nextLabel={''}
                        indicators={false}
                        prevIcon={<FontAwesomeIcon className="m-0" color="black" size="2x" icon={faAngleLeft} />}
                        nextIcon={<FontAwesomeIcon color="black" size="2x" icon={faAngleRight} />}
                        style={{width: '0 !important'}}
                    >
                      {listCarouselItem.map(function(item, i){
                        return (
                          <Carousel.Item key={i}>
                            <SectionTwoCarouselItem
                              image={item.image}
                              product={item.product}
                              text={item.text}
                              />
                          </Carousel.Item>
                          )
                      })}
                      
                    </Carousel>

        </StyledLayoutContainer>

      </StyledSection>
    )
}




// #EEF9FF