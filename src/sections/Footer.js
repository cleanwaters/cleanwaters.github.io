import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.div`
  background: #081f46;
  color: white;
  p {
    line-height: 33px;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <div className=' p-4'>
        <div className='d-md-flex justify-content-between'>
          <div className='d-md-flex py-4'>
            <div className='pr-4'>
              <img
                src={process.env.PUBLIC_URL + '/images/nav_logo.jpg'}
                className='img-fluid'
                alt='...'
              />
            </div>
            <div className='align-self-center'>
              <h3 className='py-4'>Clean Waters Australia</h3>
              <div className='d-flex justify-content-between'>
                <Link style={{ color: 'white' }} to='/about-us'>
                  About Us
                </Link>
                <Link to='/contact' style={{ color: 'white' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-center flex-md-column'>
            <div className='p-2'>
              <a
                href='https://www.facebook.com/cleanwatersaustralia/'
                target='_blank'
                role='link'
                aria-label='#'
              >
                <FaFacebookF size={32} color={'white'} />
              </a>
            </div>
            <div className='p-2'>
              <a
                href='https://www.linkedin.com/company/clean-waters-australia'
                target='_blank'
              >
                <FaLinkedinIn size={32} color={'white'} />
              </a>
            </div>
            <div className='p-2'>
              <a
                href='https://www.instagram.com/cleanwatersaustralia/'
                target='_blank'
              >
                <FaInstagram size={32} color={'white'} />
              </a>
            </div>
          </div>
        </div>
        <p>Copyright © 2021 Clean Waters Oceania</p>
      </div>
    </StyledFooter>
  );
}

// #EEF9FF
