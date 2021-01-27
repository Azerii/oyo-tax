import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import theme from '../theme';

const Caption = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 60vh;
  padding-top: 3rem;

  .captionText {
    width: 55%;
    color: ${theme.colors.dark};

    .heading {
      max-width: 80%;
      font-size: 350%;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .subheading {
      max-width: 80%;
      font-size: 100%;
    }

    .pay {
      display: block;
      width: fit-content;
      padding: 0.5rem 1.5rem;
      margin-top: 3rem;
      font-size: 100%;
      border-radius: 0.1rem;
      color: ${theme.colors.light};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
  }

  .captionMedia {
    width: 45%;
    height: 25rem;
    background-color: #333333;
  }
`;

const Landing = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Caption>
          <div className="captionText">
            <p className="heading">Pay your tax and let’s grow together</p>
            <p className="subheading">
              Fugiat anim adipisicing sint adipisicing. Dolore eiusmod ut
              aliquip cupidatat eu nulla. Sint sunt non aliquip tempor ipsum
              reprehenderit aliquip.
            </p>
            <a href="/payment" className="pay">
              Pay Your Tax
            </a>
          </div>
          <div className="captionMedia"></div>
        </Caption>
      </Container>
    </>
  );
};

export default Landing;
