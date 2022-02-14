import { Accordion, useAccordionButton } from 'react-bootstrap';
import { StyledH20 } from '../components/typography/Paragraph';
import { featureIconItems } from './sections-data';

function CustomToggle({ children, eventKey, image, headerText }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!', eventKey)
  );

  return (
    <div
      // border="secondary"
      // onMouseOver={decoratedOnClick}
      onMouseEnter={decoratedOnClick}
      style={{
        borderRadius: '16px',
      }}
      className='p-4'
    >
      <img
        src={process.env.PUBLIC_URL + `/images/section6/${image}.svg`}
        loading='lazy'
        alt='#'
        className='s5-image py-2 mb-2'
      />
      <br />
      <StyledH20>{headerText}</StyledH20>
    </div>
  );
}

export const ExampleAccordion2 = () => {
  const OnMouseAction = (action) => {
    console.log('OnMouseAction', action);
  };

  return (
    <Accordion defaultActiveKey='0'>
      <div className='row'>
        {featureIconItems.map((item, index) => (
          <div
            className='col-4 mt-4 w-100'
            style={{
              borderRadius: '16px',
            }}
            data-aos='fade-right'
            key={index}
          >
            <div
              style={{
                borderRadius: '16px',
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.08)',
              }}
            >
              <CustomToggle
                eventKey={index}
                headerText={item.title}
                image={item.icon}
              />
              <Accordion.Collapse eventKey={index}>
                <div className='p-4' style={{ color: '#676767' }}>
                  {item.description}
                </div>
              </Accordion.Collapse>
            </div>
          </div>
        ))}
      </div>
    </Accordion>
  );
};
