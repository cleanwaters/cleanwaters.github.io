import { StyledSection } from '../components/styled-shared';
import styled from 'styled-components';
import { CWCard, StyledCapacityDropIconWrapper } from './CWCard';
import { targetMarketProduct } from '../data/targetMarketProduct';

export const StyledSectionOneDetails = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 61px;
  color: #081f47;
  margin-bottom: 1em;

  span {
    color: #00c0ff;
  }
`;

export const StyledCardTopRightText = styled.div`
  position: absolute;
  top: 50%;
  z-index: 300;
  width: 100%;
  font-family: Dosis;
  color: white;
  right: 12px;

  div:first-child {
    font-size: 12px;
    margin: 0 0;
    position: relative;
    left: 14%;
  }

  div:nth-child(2) {
    font-size: 20px;
    position: relative;
  }

  @media only screen and (min-width: 300px) {
    div:nth-child(2) {
      left: 3.2vw;
    }
  }

  @media only screen and (min-width: 600px) {
    div:nth-child(2) {
      left: 0.6vw;
    }
  }
`;

export const StyledWhatWeDoDetails = styled.div`
  border-left: 1em solid #00c0ff !important;
`;

export function SectionFour() {
  return (
    <section className='px-5d'>
      <StyledSectionOneDetails
        data-aos-anchor-placement='top-center'
        className='text-center'
      >
        <span> Target Market and </span> Product Line
      </StyledSectionOneDetails>

      <div className='container-fluid'>
        <div className='row px-2'>
          {targetMarketProduct.map((item, i) => (
            <div
              data-aos='fade-in'
              data-aos-delay={150 * (i + 1)}
              key={i}
              className='col-md-4'
            >
              <StyledCapacityDropIconWrapper>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + '/images/capacity-drop.svg'}
                    loading='lazy'
                    alt='#'
                    className='ui-image-half-right'
                  />
                  <StyledCardTopRightText>
                    <div>Capacity</div>
                    <div>{item.capacity} L</div>
                  </StyledCardTopRightText>
                </div>
              </StyledCapacityDropIconWrapper>

              <CWCard
                title={item.title}
                listText={item.targets}
                image={item.image}
              ></CWCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
