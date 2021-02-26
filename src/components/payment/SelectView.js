import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import portrait_cityscape from '../../assets/global/portrait_cityscape.png';
import arrow_right from '../../assets/global/arrow_right.svg';
// import chevron from '../../assets/global/chevron.svg';
import Container from '../Container';
import theme from '../../theme';
import { useHistory } from 'react-router';

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
          margin-top: 5rem;

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

const SelectView = ({
  title,
  inputLabel,
  inputName,
  target,
  dataList = [],
  // lga,
  // paymentType,
  // paymentMethod,
  payerId
}) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let payerDetails;

    const payerIdInput = document.querySelector('input[name="payerId"]');

    const payerId = payerIdInput ? payerIdInput.value : '88975655';

    if (payerIdInput) {
      if (localStorage.payerDetails) {
        const detailsObj = JSON.parse(localStorage.payerDetails);
        payerDetails = {
          ...detailsObj,
          payerId
        };
      }
      payerDetails = {
        payerId
      };

      localStorage.setItem('payerDetails', JSON.stringify(payerDetails));
    }

    history.push(target);
  };

  return (
    <Container>
      <Wrapper>
        <div className="imgWrapper">
          <img src={portrait_cityscape} alt="" />
        </div>
        <div className="contentWrapper">
          <div className="inner">
            <p className="title">{title}</p>
            <form className="formEl" onSubmit={(e) => handleSubmit(e)}>
              <p className="inputLabel">{inputLabel}</p>
              {!payerId && (
                <div className="inputWrapper">
                  {/* <input
                    list="select"
                    name={inputName}
                    placeholder={`e.g ${dataList[0]}`}
                    required
                  /> */}
                  <select name={inputName} id="select">
                    <option value="">e.g {dataList[0]}</option>
                    {dataList.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {payerId && (
                <div className="inputWrapper">
                  <input
                    type="text"
                    name={inputName}
                    placeholder={`e.g 7887565`}
                  />
                </div>
              )}
              {payerId && (
                <p className="createId">
                  If you don't have an ID number,{' '}
                  <a href="/payment/create-payer-id/1">create here</a>
                </p>
              )}
              <div className="btnWrapper">
                {payerId ? (
                  <button type="submit">Done</button>
                ) : (
                  <button type="submit">
                    Next <img src={arrow_right} alt="" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

SelectView.propTypes = {
  title: PropTypes.string,
  inputLabel: PropTypes.string,
  inputName: PropTypes.string,
  target: PropTypes.string,
  dataList: PropTypes.array,
  lga: PropTypes.bool,
  paymentType: PropTypes.bool,
  paymentMethod: PropTypes.bool,
  payerId: PropTypes.bool
};

export default SelectView;
