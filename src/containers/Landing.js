import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import theme from '../theme';
import wavy_line from '../assets/global/wavy_line.svg';

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
      font-size: 300%;
      font-weight: 600;
      margin-bottom: 1rem;

      .underlined {
        display: inline-block;
        position: relative;

        .wave {
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          // height: 0.5rem;
          width: 100%;
        }
      }
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
    postion: relative;
    width: 45%;
    background-color: #333333;

    iframe {
      min-height: 50vh;
    }
  }
`;

const Landing = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Caption>
          <div className="captionText">
            <p className="heading">
              Pay{' '}
              <span className="underlined">
                your tax <img className="wave" src={wavy_line} alt="" />
              </span>{' '}
              and let’s grow together
            </p>
            <p className="subheading">
              Fugiat anim adipisicing sint adipisicing. Dolore eiusmod ut
              aliquip cupidatat eu nulla. Sint sunt non aliquip tempor ipsum
              reprehenderit aliquip.
            </p>
            <a href="/payment" className="pay">
              Pay Your Tax
            </a>
          </div>
          <div className="captionMedia">
            <iframe
              title="Introduction"
              width="100%"
              src="https://player.vimeo.com/video/521917133"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Caption>
      </Container>
    </>
  );
};

export default Landing;
