import { Footer } from '../sections/Footer';
import styled from 'styled-components';
import {
  StyledLayoutContainer,
  StyledSection,
} from '../components/styled-shared';
import { GoogleMap, Marker } from 'react-google-maps';

import React from 'react';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { NavbarSecond } from '../components/NavbarSecond';
import ContactForm from './our-solutions/ContactForm';

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      style={{
        position: 'relative',
        top: '45%',
        width: '60%',
        height: '25%',
        borderRadius: '50px',
        backgroundColor: '#0170B9',
      }}
      to='#'
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export const StyledContact = styled.div``;

export const StyledSectionOneDetails = styled.h2`
  font-weight: bold;
  font-size: 48px;
  color: #081f47;

  span {
    color: #00c0ff;
  }
`;

function Map() {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {/* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
    </GoogleMap>
  );
}

const StyledContactForm = styled.div`
  input {
    height: 60px;
  }
`;

const WrappedMap = withScriptjs(withGoogleMap(Map));

export function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'clean_water',
        'template_xaxgdpi',
        form.current,
        'user_0IR6b2RHWqOPPeblkysxV'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div>
      <NavbarSecond />
      <StyledSection style={{ paddingTop: '0' }}>
        <StyledLayoutContainer className='px-4'>
          <StyledSectionOneDetails
            style={{ marginTop: '2em', marginBottom: '2em' }}
          >
            <span> Contact</span> Us
          </StyledSectionOneDetails>
          {/*<div style={{width:'65vw', height:'60vh', margin:'auto auto', borderRaidus:'50px'}}>*/}
          {/*    <WrappedMap*/}
          {/*    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDStj6vFwksrpRvU69f5O1xpX9VZ5t-8MY`}*/}
          {/*    loadingElement={<div style={{ height: `100%`, borderRaidus:'50px' }} />}*/}
          {/*    containerElement={<div style={{ height: `57vh`, borderRaidus:'50px' }} />}*/}
          {/*    mapElement={<div style={{ height: `100%`, borderRaidus:'50px' }} />}*/}
          {/*    />*/}
          {/*</div>*/}
          <ContactForm />
          <StyledContactForm style={{ width: '62vw', margin: 'auto auto' }}>
            <Form ref={form} onSubmit={sendEmail}>
              <Row className='my-3'>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Control type='text' placeholder='Name' name='name' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Control type='email' placeholder='Email' name='email' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Control
                    type='text'
                    placeholder='Contact number'
                    name='contact_number'
                  />
                </Form.Group>
              </Row>
              <Row className='my-3'>
                <Form.Group as={Col} md='8' controlId='formGridPassword'>
                  <Form.Control
                    as='textarea'
                    placeholder='Message'
                    style={{ height: '245px' }}
                    name='message'
                  />
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='formGridPassword'>
                  <Button
                    style={{
                      position: 'relative',
                      top: '45%',
                      width: '60%',
                      height: '25%',
                      borderRadius: '50px',
                      backgroundColor: '#0170B9',
                    }}
                    variant='primary'
                    type='submit'
                  >
                    Send
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </StyledContactForm>
        </StyledLayoutContainer>
      </StyledSection>
      <Footer />
    </div>
  );
}
