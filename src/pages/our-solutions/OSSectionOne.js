import React from 'react';
import { StyledSectionOneDetails } from '../../sections/SectionFour';
import OurSolutionCard from './OurSolutionCard';
import { CWCard, StyledCWCard, StyledListText } from '../../sections/CWCard';
import { targetMarketProduct } from '../../data/targetMarketProduct';
import { StyledP36 } from '../../components/typography/Paragraph';

export default function OSSectionOne() {
  return (
    <section
      style={{
        backgroundImage: `url(/images/background/Ellipse13.svg)`,
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat, repeat',
      }}
      className='mt-5 container-fluid text-center pt-5'
    >
      <StyledSectionOneDetails data-aos-anchor-placement='top-center'>
        {' '}
        <span>Our </span> Solution
      </StyledSectionOneDetails>
      <div className='row' style={{ marginBottom: '8em' }}>
        {targetMarketProduct.map((item, i) => (
          <div className='col-md-4'>
            <StyledCWCard className='card my-4'>
              <div className='card-body'>
                <StyledP36
                  className='text_bold text_color_primary'
                  style={{
                    fontSize: '36px',
                    color: '#00C0FF',
                    margin: 0,
                  }}
                >
                  {item.title}
                </StyledP36>

                <div
                  style={{
                    height: '15em',
                    padding: '2em 0 3em 0',
                  }}
                >
                  <img
                    style={{ height: '100%' }}
                    src={process.env.PUBLIC_URL + `/images/${item.image}`}
                    loading='lazy'
                    className='img-fluid'
                  />
                </div>

                <StyledListText className='mb-4'>
                  {item.detailTargets.map(function (item, i) {
                    return <li key={i}>{item}</li>;
                  })}
                </StyledListText>
              </div>
            </StyledCWCard>
          </div>
        ))}
      </div>
    </section>
  );
}
