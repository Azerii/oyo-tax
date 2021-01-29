import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import checked_green from '../assets/global/checked_green.svg';
import theme from '../theme';

const Wrapper = styled.div`
  width: 55vw;
  margin: auto;
  margin-top: 2rem;
  padding: 2rem 0;
  background-color: ${theme.colors.light};
  border-radius: 0.3rem;
  box-shadow: 0px 0px 30px ${theme.colors.shadow};

  > .title {
    font-size: 150%;
    text-align: center;
    margin-bottom: 2rem;
  }

  .stepsWrapper {
    display: flex;
    justify-content: center;
  }

  > .content {
    width: 80%;
    margin: auto;

    > .title {
      font-size: 120%;
      font-weight: 600;
      margin: 1rem 0;
      text-transform: capitalize;
    }

    > .inner {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;
      grid-gap: 2rem;
      margin: 2rem 0;
    }
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 15%;
  filter: ${(props) =>
    props.disabled ? 'grayscale(1) contrast(0.5)' : 'unset'};

  .icon {
    height: 1.5rem;
    margin-bottom: 2rem;
  }

  .dashed {
    width: 70%;
    position: absolute;
    top: 0.75rem;
    left: -35%;
    border-top: 1px dashed ${theme.colors.lightgrey};
  }

  .label {
    font-size: 70%;
    color: ${theme.colors.dark};
    text-transform: capitalize;
    text-align: center;
  }
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid ${theme.colors.lightgrey};
  margin: 2rem 0;
`;

const FormView = ({ title, steps = [], divider, children }) => {
  const urlArr = window.location.href.split('/');
  const urlArrLen = urlArr.length;
  const currentStep = Number(urlArr[urlArrLen - 1]);

  return (
    <Wrapper>
      <p className="title">{title || 'Please provide your details here'}</p>
      <div className="stepsWrapper">
        {steps.map((step, index) => (
          <Step key={step} disabled={currentStep - 1 >= index ? false : true}>
            <img src={checked_green} alt="" className="icon" />
            {index > 0 && <div className="dashed"></div>}
            <p className="label">{step}</p>
          </Step>
        ))}
      </div>
      {divider && <Divider />}
      <div className="content">{children}</div>
    </Wrapper>
  );
};

FormView.propTypes = {
  title: PropTypes.string,
  steps: PropTypes.array,
  divider: PropTypes.bool
};

export default FormView;
