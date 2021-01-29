import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';
import Container from './Container';
import background_cityscape from '../assets/global/background_cityscape.png';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;

  .background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 60vh;
    background-image: url(../assets/global/background_cityscape.png);
    z-index: 0;

    .foreground {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: brightness(0.3);
    }
  }

  > .content {
    position: relative;
  }
`;

const Layout = ({ bg, children }) => {
  return (
    <>
      <Navbar />
      <Wrapper>
        {bg && (
          <div className="background">
            <img className="foreground" src={background_cityscape} alt="" />
          </div>
        )}
        <Container className="content">{children}</Container>
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  bg: PropTypes.bool,
  children: PropTypes.element
};

export default Layout;
