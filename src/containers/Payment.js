import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import search_icon from '../assets/global/search_icon.svg';
import yellow_card_icon from '../assets/payment/yellow_card_icon.svg';
import red_card_icon from '../assets/payment/red_card_icon.svg';
import green_card_icon from '../assets/payment/green_card_icon.svg';
import arrow_right from '../assets/global/arrow_right.svg';
import circleChecked from '../assets/payment/circleChecked.svg';
import theme from '../theme';
import Card from '../components/Card';
import Layout from '../components/Layout';
import SelectView from '../components/payment/SelectView';
import FormView from '../components/FormView';
import Grid from '../components/Grid';
import PayerIdSuccess from '../components/PayerIdSuccess';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .caption {
    color: ${theme.colors.light};
    font-size: 200%;
    font-weight: 600;
    text-align: center;
    margin: 2rem 0;
  }

  .searchBar {
    display: flex;
    align-items: center;
    background-color: ${theme.colors.light};
    border-radius: 0.3rem;
    width: 25%;
    padding: 0.5rem 1rem;

    img {
      height: 1rem;
      margin-right: 1rem;
    }

    input {
      color: ${theme.colors.dark};
      background-color: inherit;
      border: none;
      width: stretch;

      &::placeholder {
        color: ${theme.colors.grey};
      }
    }
  }

  .results {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    margin-top: 2rem;
  }
`;

const PaymentPreview = styled.div`
  width: 40vw;
  margin: 2rem auto;
  border-top: 1rem solid ${theme.colors.green};
  border-radius: 0.2rem;
  box-shadow: 0px 0px 30px ${theme.colors.shadow};

  .paymentSuccess {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.colors.shadow};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
    opacity: 0;
    pointer-events: none;

    &.open {
      opacity: 1;
      pointer-events: all;
    }

    .inner {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3rem 0;
      background-color: #ffffff;
      border-radius: 0.5rem;

      p {
        color: ${theme.colors.primary};
      }

      img {
        height: 5rem;
        margin-bottom: 1.5rem;
      }
    }
  }

  > .inner {
    width: 60%;
    margin: auto;
    padding: 2rem 0;

    .heading {
      font-size: 150%;
      font-weight: 600;
      margin-bottom: 2rem;
      color: ${theme.colors.dark};
    }

    .item {
      margin-bottom: 2rem;

      .name {
        color: ${theme.colors.grey};
        font-size: 90%;
        margin-bottom: 0.5rem;
      }

      .value {
        color: ${theme.colors.dark};
        font-size: 100%;
      }
    }

    .pay {
      display: block;
      width: 100%;
      padding: 0.5rem 1.5rem;
      font-size: 100%;
      font-weight: 600;
      text-align: center;
      border-radius: 0.2rem;
      color: ${theme.colors.light};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
  }
`;

const Date = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Submit = styled.button`
  padding: 1rem 0;
  font-size: 100%;
  border-radius: 0.2rem;
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  img {
    height: 0.7rem;
    margin-left: 0.5rem;
  }
`;

const dummyResults = [
  {
    icon: yellow_card_icon,
    bg: 'primary',
    title: 'Board of Internal Revenue',
    caption: 'Select this option to make payment for internal revenue',
    actionText: 'Make Payment',
    target: '/payment/select-payment-type'
  },
  {
    icon: red_card_icon,
    bg: 'red',
    title: 'Oyo State Ministries',
    caption: 'Select this option to make payment for oyo state minstries',
    actionText: 'Make Payment',
    target: '/payment/select-payment-method'
  },
  {
    icon: green_card_icon,
    bg: 'green',
    title: 'Local Government',
    caption: 'Select this option to make payment for your Local Government',
    actionText: 'Make Payment',
    target: '/payment/select-lga'
  }
];

const dummyPreviewDetails = [
  {
    name: 'Name',
    value:
      (localStorage.payerDetails &&
        JSON.parse(localStorage.payerDetails).fullName) ||
      'Babatunde Adewuyi'
  },
  {
    name: 'Email Address',
    value:
      (localStorage.payerDetails &&
        JSON.parse(localStorage.payerDetails).email) ||
      'bade@gmail.com'
  },
  {
    name: 'Phone Number',
    value:
      (localStorage.payerDetails &&
        JSON.parse(localStorage.payerDetails).phone) ||
      '08076354783'
  },
  {
    name: 'Amount',
    value: 'N15000'
  },
  {
    name: 'Tax Payer’s ID number',
    value:
      (localStorage.payerDetails &&
        JSON.parse(localStorage.payerDetails).payerId) ||
      '8897364'
  }
];

const Payment = () => {
  const handleSubmit = (e, target) => {
    e.preventDefault();

    let payerDetails;

    const firstNameInput = document.querySelector('input[name="first_name"]');
    const lastNameInput = document.querySelector('input[name="last_name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const phoneInput = document.querySelector('input[name="phone"]');

    const firstName = firstNameInput ? firstNameInput.value : 'Babatunde';
    const lastName = lastNameInput ? lastNameInput.value : 'Adewuyi';
    const fullName = `${firstName} ${lastName}`;
    const email = emailInput ? emailInput.value : 'bade@gmail.com';
    const phone = phoneInput ? phoneInput.value : '08131455579';

    if (firstNameInput && lastNameInput && emailInput && phoneInput) {
      if (localStorage.payerDetails) {
        const detailsObj = JSON.parse(localStorage.payerDetails);
        payerDetails = {
          ...detailsObj,
          fullName,
          email,
          phone
        };
      } else {
        payerDetails = {
          fullName,
          email,
          phone
        };
      }

      localStorage.setItem('payerDetails', JSON.stringify(payerDetails));
    }

    window.location.replace(target);
  };

  return (
    <Switch>
      {/* payment landing */}
      <Route exact path="/payment">
        <Layout bg>
          <Wrapper>
            <p className="caption">
              Choose the payment that is
              <br />
              of your interest
            </p>
            <form id="searchBar" className="searchBar">
              <img src={search_icon} alt="" />
              <input
                name="search"
                type="text"
                placeholder="Search for payments"
              />
            </form>
            <div className="results">
              {dummyResults.map((item) => (
                <Card
                  key={item.title}
                  icon={item.icon}
                  bg={item.bg}
                  title={item.title}
                  caption={item.caption}
                  actionText={item.actionText}
                  target={item.target}
                />
              ))}
            </div>
          </Wrapper>
        </Layout>
      </Route>

      <Route exact path="/payment/select-lga">
        <Layout>
          <SelectView
            title="Select Local Government Area"
            inputLabel="Select L.G.A"
            inputName="lga"
            target="/payment/select-payment-type"
            dataList={['Akinyele', 'Ibadan North', 'Atiba']}
          />
        </Layout>
      </Route>
      <Route exact path="/payment/select-payment-type">
        <Layout>
          <SelectView
            title="Select Payment Type"
            inputLabel="Payment"
            inputName="paymentType"
            target="/payment/provide-payer-id"
            dataList={['Property Tax', 'Income Tax', 'VAT']}
          />
        </Layout>
      </Route>
      <Route exact path="/payment/select-payment-method">
        <Layout>
          <SelectView
            title="Please select the payment method of your choice"
            inputLabel="Payment Method"
            inputName="paymentMethod"
            target="/payment/provide-payer-id"
            dataList={[
              'Hackney Permit',
              'Capital Gain Trust',
              'Direct Assessment'
            ]}
          />
        </Layout>
      </Route>
      <Route exact path="/payment/provide-payer-id">
        <Layout>
          <SelectView
            title="Please provide your tax payer ID number"
            inputLabel="Payer ID"
            inputName="payerId"
            target="/payment/preview"
            payerId
          />
        </Layout>
      </Route>
      <Route exact path="/payment/preview">
        <Layout>
          <PaymentPreview>
            <div
              id="paymentSuccess"
              className="paymentSuccess"
              onClick={(e) => {
                if (e.target.id === 'paymentSuccess') {
                  e.target.classList.remove('open');
                }
              }}
            >
              <div className="inner">
                <img src={circleChecked} alt="" />
                <p>Payment Successful</p>
              </div>
            </div>
            <div className="inner">
              <p className="heading">Payment Details Preview</p>
              {dummyPreviewDetails.map((item) => (
                <div key={item.name} className="item">
                  <p className="name">{item.name}</p>
                  <p className="value">{item.value}</p>
                </div>
              ))}
              <button
                href="/payment/preview"
                className="pay"
                onClick={() =>
                  document
                    .querySelector('#paymentSuccess')
                    .classList.add('open')
                }
              >
                Pay N15000
              </button>
            </div>
          </PaymentPreview>
        </Layout>
      </Route>

      {/* create payer ID */}
      <Route exact path="/payment/create-payer-id/1">
        <Layout bg>
          <Wrapper>
            <FormView
              steps={['step 1', 'step 2']}
              title="Create Your Payer ID Number"
              divider
            >
              <form
                onSubmit={(e) => handleSubmit(e, '/payment/create-payer-id/2')}
                className="inner"
              >
                <Grid gridColumn="1/6">
                  <p className="label">
                    first name <span className="required">*</span>
                  </p>
                  <input type="text" name="first_name" required />
                </Grid>
                <Grid gridColumn="1/6">
                  <p className="label">
                    last name <span className="required">*</span>
                  </p>
                  <input type="text" name="last_name" required />
                </Grid>

                <Grid gridColumn="1/6">
                  <p className="label">
                    date of birth <span className="required">*</span>
                  </p>
                  <Date>
                    <Grid gridColumn="1/2">
                      <select name="day">
                        <option value="22">22</option>
                      </select>
                    </Grid>
                    <Grid gridColumn="2/3">
                      <select name="month">
                        <option value="March">March</option>
                      </select>
                    </Grid>
                    <Grid gridColumn="3/4">
                      <select name="year">
                        <option value="">2003</option>
                      </select>
                    </Grid>
                  </Date>
                </Grid>
                <Grid gridColumn="1/6">
                  <p className="label">
                    address <span className="required">*</span>
                  </p>
                  <input type="text" name="address" />
                </Grid>
                <Grid gridColumn="1/6">
                  <p className="label">
                    email <span className="required">*</span>
                  </p>
                  <input type="email" name="email" />
                </Grid>
                <Grid gridColumn="1/6">
                  <p className="label">
                    Phone Number <span className="required">*</span>
                  </p>
                  <input type="text" name="phone" />
                </Grid>
                <Grid gridColumn="1/6">
                  <p className="label">
                    password <span className="required">*</span>
                  </p>
                  <input type="password" name="password" />
                </Grid>
                <Grid>
                  <Submit>
                    Next <img src={arrow_right} alt="" />
                  </Submit>
                </Grid>
              </form>
            </FormView>
          </Wrapper>
        </Layout>
      </Route>

      <Route exact path="/payment/create-payer-id/2">
        <PayerIdSuccess
          id="payerIdSuccess"
          onClick={(e) => {
            if (e.target.id === 'payerIdSuccess') {
              e.target.classList.remove('open');
            }
          }}
        >
          <div className="inner">
            <img src={circleChecked} alt="success" />
            <p className="prompt">Your Tax Payer ID is:</p>
            <p className="payerId">{Math.ceil(Math.random() * 1000000)}</p>
            <a href="/payment/provide-payer-id">Continue</a>
          </div>
        </PayerIdSuccess>
        <Layout bg>
          <Wrapper>
            <FormView
              steps={['step 1', 'step 2']}
              title="Create Your Payer ID Number"
              divider
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#payerIdSuccess')
                    .classList.add('open');
                }}
                className="inner"
              >
                <Grid gridColumn="1/6">
                  <p className="label">
                    BVN number <span className="required">*</span>
                  </p>
                  <input type="text" name="bvn" required />
                </Grid>
                <Grid gridColumn="1/6">
                  <p className="label">
                    title <span className="required">*</span>
                  </p>
                  <select name="title" required>
                    <option value="Mr">Mr</option>
                  </select>
                </Grid>
                <Grid gridColumn="1/6">
                  <p className="label">
                    sex <span className="required">*</span>
                  </p>
                  <select name="sex" required>
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                </Grid>
                <Grid gridColumn="1/6">
                  <p className="label">
                    marital status <span className="required">*</span>
                  </p>
                  <select name="marital_status" required>
                    <option value="married">Married</option>
                    <option value="single">Single</option>
                  </select>
                </Grid>
                <Grid>
                  <Submit>Done</Submit>
                </Grid>
              </form>
            </FormView>
          </Wrapper>
        </Layout>
      </Route>

      {/* <Route
        path="*"
        component={() => <Redirect to="/payment/provide-payer-id" />}
      /> */}
    </Switch>
  );
};

export default Payment;
