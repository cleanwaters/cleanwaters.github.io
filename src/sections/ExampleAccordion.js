import { Accordion, Card, useAccordionButton } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!', eventKey)
  );

  const OnMouseAction = (action) => {
    console.log('OnMouseAction', action);
  };

  return (
    <div
      // border="secondary"
      onMouseOver={decoratedOnClick}
      style={{
        borderRadius: '16px',
      }}
      className='p-4'
    >
      <img
        src={process.env.PUBLIC_URL + `/images/section6/scalableinfra.svg`}
        loading='lazy'
        alt='#'
        className='s5-image py-2 mb-2'
      />
      <br />
      Energy Efficient & Cost-Effective
    </div>
  );
}

function CustomButtonToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!', eventKey)
  );

  const OnMouseAction = (action) => {
    console.log('OnMouseAction', action);
  };

  return (
    <button
      type='button'
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
      onMouseOver={decoratedOnClick}
      // onMouseLeave={() => OnMouseAction('leave')}
    >
      {children}
    </button>
  );
}

export const ExampleAccordion = () => {
  const OnMouseAction = (action) => {
    console.log('OnMouseAction', action);
  };

  return (
    <Accordion defaultActiveKey='0'>
      <div className='row'>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            className='col-4 mt-4 w-100 '
            style={{
              borderRadius: '16px',
            }}
          >
            <div
              key={item}
              style={{
                borderRadius: '16px',
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.08)',
              }}
            >
              <CustomToggle eventKey={item} />
              <Accordion.Collapse eventKey={item}>
                <div className='p-4'>
                  Our products are environmentally friendly, remove dependence
                  on plastic water bottles and 5-gallon solutions, thus saving
                  on logistics and storage costs.
                </div>
              </Accordion.Collapse>
            </div>
          </div>
        ))}
      </div>
    </Accordion>
  );
};
