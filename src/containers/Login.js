import React from 'react';
import styled from 'styled-components';
import portrait_cityscape from '../assets/global/portrait_cityscape.png';
import arrow_right from '../assets/global/arrow_right.svg';
import theme from '../theme';
import Navbar from '../components/Navbar';

const Wrapper = styled.div`
  width: 60vw;
  display: flex;
  margin: 5rem auto;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  min-height: 40vh;

  .imgWrapper {
    width: 30%;
    overflow: hidden;

    img {
      height: 100%;
    }
  }

  .contentWrapper {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;

    .inner {
      width: 80%;
      margin: auto;

      .title {
        font-size: 150%;
        margin-bottom: 3rem;
        max-width: 80%;
      }

      .inputLabel {
        font-size: 90%;
        margin-bottom: 0.5rem;
      }

      .formEl {
        width: 70%;

        .inputWrapper {
          margin-bottom: 1.5rem;

          input,
          select {
            width: 100%;
            padding: 1rem;
            border: 1px solid ${theme.colors.lightgrey};
            border-radius: 0.2rem;

            &::placeholder {
              color: ${theme.colors.lightgrey};
            }
          }
        }

        .createId {
          margin-top: 0.5rem;
          font-size: 80%;

          a {
            color: ${theme.colors.primary};
            text-decoration: underline;
          }
        }

        .btnWrapper {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          margin-top: 2rem;

          button {
            width: fit-content;
            padding: 0.5rem 1.5rem;
            font-size: 100%;
            border-radius: 0.2rem;
            color: ${theme.colors.light};
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};

            img {
              height: 0.7rem;
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
`;

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.replace('/dashboard');
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="imgWrapper">
          <img src={portrait_cityscape} alt="portrait_cityscape" />
        </div>
        <div className="contentWrapper">
          <div className="inner">
            <p className="title">Login to your dashboard</p>
            <form className="formEl" onSubmit={(e) => handleSubmit(e)}>
              <p className="inputLabel">Payer ID</p>
              <div className="inputWrapper">
                <input
                  type="text"
                  name="payerId"
                  placeholder={`e.g 7887565`}
                  required
                />
              </div>
              <p className="inputLabel">Password</p>
              <div className="inputWrapper">
                <input type="password" name="password" required />
              </div>
              <div className="btnWrapper">
                <button type="submit">
                  Login <img src={arrow_right} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Login;
