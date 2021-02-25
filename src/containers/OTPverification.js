import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import theme from '../theme';

const Wrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .caption {
    width: 70%;
    color: ${theme.colors.dark};
    font-size: 2.3rem;
    margin-bottom: 5rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .formGroup {
      display: flex;

      input {
        border: 1px solid #a09797;
        border-radius: 0.625rem;
        font-size: 150%;
        padding: 1.5rem 1rem;
        margin: 0 1.5rem;
        text-align: center;
        width: 4rem;
      }
    }

    button {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.light};
      padding: 0.75rem 4rem;
      font-size: 100%;
      margin-top: 3rem;
      border-radius: 0.2rem;
    }
  }
`;

const OTPverification = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const regExPattern = /[$-/:-?{-~A-z\s!"^_`[\]]/;

  const handleChange = (e, setter) => {
    if (e.target.value.match(regExPattern)) {
      e.preventDefault();
    } else {
      setter(e.target.value);
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <p className="caption">
          Verify your account by typing in the OTP code that was sent to the
          email you use to sign up
        </p>
        <form>
          <div className="formGroup">
            <input
              type="text"
              maxLength={1}
              value={input1}
              onChange={(e) => handleChange(e, setInput1)}
            />
            <input
              type="text"
              maxLength={1}
              value={input2}
              onChange={(e) => handleChange(e, setInput2)}
            />
            <input
              type="text"
              maxLength={1}
              value={input3}
              onChange={(e) => handleChange(e, setInput3)}
            />
            <input
              type="text"
              maxLength={1}
              value={input4}
              onChange={(e) => handleChange(e, setInput4)}
            />
          </div>
          <button type="submit">Verify</button>
        </form>
      </Wrapper>
    </>
  );
};

export default OTPverification;
