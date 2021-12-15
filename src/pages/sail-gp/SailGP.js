import { NavbarSecond } from '../../components/NavbarSecond';
import { Footer } from '../../sections/Footer';

import React from 'react';
import styled from 'styled-components';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Button } from '../../components/button/Button';
import { useNavigate } from 'react-router';

const StyledJumbotron = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;

  @media only screen and (min-width: 300px) {
    height: 100vh;
  }

  position: relative;
  top: 0;

  > img {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;

    opacity: 0.3;
  }
`;

const StyledJumbotronText = styled.div`
  color: white;
  font-family: Dosis;

  margin: auto auto;
  text-align: center;

  position: relative;

  > div {
    font-size: 18px;
    line-height: 34px;
  }

  @media only screen and (min-width: 300px) {
    width: 90%;
    top: 25vw;

    > div:first-child {
      margin-top:0px;
      margin-bottom: 7px;
      font-weight: 700;
      font-size: 32px;
      line-height: 42px;
    }


    > div:last-child > div > button {
      font-size: 14px;
      margin-top:20px;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 55%;
    top: 20vw;

    > div:first-child {
      font-weight: 800;
      font-size: 48px;
      line-height: 65px;
      color: white;
      font-family: Nunito;
    }

    > div {
      font-size: 24px;
      line-height: 42px;
    }
    
    > div:last-child > div > button {
      font-size:18px;
    }
  }

  @media only screen and (min-width: 900px) {
    width: 35%;
    top: 13vw;

    > div:last-child > div > button {
      font-size:18px;
    }
  }
`;

const StyledRightContent = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 992px) {
    margin: 10px 70px;
  }

  > img {
    margin: 10px auto;
  }

  > img:first-child {
    height: 40%;
    width: 50%;
  }

  > img:nth-child(2) {
    height: 40%;
    width: 30%;
  }
`;

const StyledContent = styled.div`

  > div {
    margin:8vh;
  } 

  @media only screen and (min-width: 992px) {
    display: flex;

    > div {
      width: 50%;
    }
  }
`;

export default function SailGP() {
  let navigate = useNavigate();

  return (
    <div>
      <NavbarSecond />
      <div>
        <StyledJumbotron>
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/sailgp/SAILGP-credit-Bob-Martin-BB602504.jpg`
            }
          />
          {/* <Navbar/> */}
          <div
            data-aos='fade-up'
            style={{ zIndex: 4, position: 'relative' }}
            // className='d-md-flex'
          >
            <StyledJumbotronText>
              <div>Clean Waters is a proud supplier of Sail Grand Prix</div>
              <div>
                Come taste our pure drinking water made from air and solar energy.
              </div>
              <div>
                Find out more about our world-first sustainable water solution for homes, offices, industry and government below.
              </div>
              <div>
                <div>
                    <Button
                      size='large'
                      onClick={() => navigate('/contact')}
                      label='Find Out More'
                      style={{
                        color: 'white',
                        fontFamily: 'Nunito',
                        borderColor: 'white',
                        background: '#046EB6'
                      }}
                    />
                </div>
              </div>
            </StyledJumbotronText>
          </div>
        </StyledJumbotron>
        <StyledContent>
          <div className='md-flex'>
            <Image
              id="sail-gp-image"
              src={process.env.PUBLIC_URL + `/images/sailgp/sail gp official supplier.png`}
            />
          </div>
        </StyledContent>
      </div>
      <Footer />
    </div>
  );
}
