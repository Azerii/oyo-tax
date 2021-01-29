import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  text-align: center;
  background-color: ${theme.colors.light};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;

  .iconWrapper {
    position: relative;
    width: 40%;
    height: 0;
    padding-top: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme};
    border-radius: 50%;

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50%;
    }
  }

  .title {
    color: ${(props) => props.theme};
    margin: 1.5rem 0;
  }

  .subtitle {
    color: ${theme.colors.dark};
    font-size: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .actionBtn {
    width; fit-content;
    color: ${theme.colors.light};
    background-color: ${(props) => props.theme};
    padding: 0.5rem 1.5rem;
    font-size: 100%;
    margin: 1rem 0;
    border-radius: 0.2rem;
  }
`;

const Card = ({ icon, bg, title, caption, actionText, target }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper theme={theme.colors[bg]}>
        <div className="iconWrapper">{<img src={icon} alt="" />}</div>
        <p className="title">{title}</p>
        <p className="subtitle">{caption}</p>
        <a href={target || 'select-lga'} className="actionBtn">
          {actionText}
        </a>
      </Wrapper>
    </ThemeProvider>
  );
};

Card.propTypes = {
  icon: PropTypes.string,
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  target: PropTypes.string,
  actionText: PropTypes.string
};

export default Card;
