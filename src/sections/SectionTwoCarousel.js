import SectionTwoCarouselItem from './SectionTwoCarouselItem';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { listCarouselItem } from './SectionTwo';

export const StyledSectionCardDefault = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
  border-radius: 50px;
  // height:220px;
`;

export const StyledSectionCarouselP = styled.p`
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  font-family: Nunito;

  span {
    color: #0170b9;
  }
`;

export default function SectionTwoCarousel({}) {
  return (
    <section className='container-fluid my-5s'>
      <Carousel
        // activeIndex={2}
        variant='dark'
        prevLabel={''}
        nextLabel={''}
        indicators={false}
        prevIcon={
          <FontAwesomeIcon
            className='m-0'
            color='black'
            size='2x'
            icon={faAngleLeft}
          />
        }
        nextIcon={
          <FontAwesomeIcon color='black' size='2x' icon={faAngleRight} />
        }
        style={{ width: '0 !important' }}
        className='carousel_transition'
        data-aos='fade-down'
      >
        {listCarouselItem.map(function (item, i) {
          return (
            <Carousel.Item key={i} className='carousel_transition'>
              <SectionTwoCarouselItem
                image={item.image}
                product={item.product}
                text={item.text}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
