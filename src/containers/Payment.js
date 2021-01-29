import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import search_icon from '../assets/global/search_icon.svg';
import yellow_card_icon from '../assets/payment/yellow_card_icon.svg';
import red_card_icon from '../assets/payment/red_card_icon.svg';
import green_card_icon from '../assets/payment/green_card_icon.svg';
import arrow_right from '../assets/global/arrow_right.svg';
import theme from '../theme';
import Card from '../components/Card';
import Layout from '../components/Layout';
import SelectView from '../components/payment/SelectView';
import FormView from '../components/FormView';
import Grid from '../components/Grid';

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

  .inner {
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
    target: '/payment/select-payment-type'
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
    value: 'Babatunde Adewuyi'
  },
  {
    name: 'Email Address',
    value: 'bade@gmail.com'
  },
  {
    name: 'Phone Number',
    value: '09019089009'
  },
  {
    name: 'Amount',
    value: 'N15000'
  },
  {
    name: 'Tax Payer’s ID number',
    value: '8989040099'
  }
];

const Payment = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlArr = window.location.href.split('/');
    const urlArrLen = urlArr.length;
    const currentStep = Number(urlArr[urlArrLen - 1]);
    history.push(`${currentStep + 1}`);
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
            target="/payment/select-payment-method"
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
            <div className="inner">
              <p className="heading">Payment Details Preview</p>
              {dummyPreviewDetails.map((item) => (
                <div key={item.name} className="item">
                  <p className="name">{item.name}</p>
                  <p className="value">{item.value}</p>
                </div>
              ))}
              <a href="/payment/preview" className="pay">
                Pay N15000
              </a>
            </div>
          </PaymentPreview>
        </Layout>
      </Route>

      {/* create payer ID */}
      <Route exact path="/payment/create-payer-id/1">
        <Layout bg>
          <FormView steps={['step 1', 'step 2']} divider>
            <form onSubmit={(e) => handleSubmit(e)} className="inner">
              <Grid gridColumn="1/6">
                <p className="label">first name</p>
                <input type="text" name="first_name" />
              </Grid>
              <Grid gridColumn="1/6">
                <p className="label">last name</p>
                <input type="text" name="last_name" />
              </Grid>

              <Grid gridColumn="1/6">
                <p className="label">date of birth</p>
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
                      <option value="">2021</option>
                    </select>
                  </Grid>
                </Date>
              </Grid>
              <Grid gridColumn="1/6">
                <p className="label">address</p>
                <input type="text" name="address" />
              </Grid>
              <Grid gridColumn="1/6">
                <p className="label">email</p>
                <input type="text" name="email" />
              </Grid>

              <Grid gridColumn="1/6">
                <p className="label">password</p>
                <input type="password" name="password" />
              </Grid>
              <Grid>
                <Submit>
                  Next <img src={arrow_right} alt="" />
                </Submit>
              </Grid>
            </form>
          </FormView>
        </Layout>
      </Route>

      <Route exact path="/payment/create-payer-id/2">
        <Layout bg>
          <FormView steps={['step 1', 'step 2']} divider>
            <form onSubmit={(e) => handleSubmit(e)} className="inner">
              <Grid gridColumn="1/6">
                <p className="label">BVN number</p>
                <input type="text" name="bvn" />
              </Grid>
              <Grid gridColumn="1/6">
                <p className="label">title</p>
                <select name="title">
                  <option value="Mr">Mr</option>
                </select>
              </Grid>
              <Grid gridColumn="1/6">
                <p className="label">sex</p>
                <select name="sex">
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
              </Grid>
              <Grid gridColumn="1/6">
                <p className="label">marital status</p>
                <select name="marital_status">
                  <option value="married">Married</option>
                  <option value="single">Single</option>
                </select>
              </Grid>
              <Grid>
                <Submit>Done</Submit>
              </Grid>
            </form>
          </FormView>
        </Layout>
      </Route>

      <Route
        path="*"
        component={() => <Redirect to="/payment/provide-payer-id" />}
      />
    </Switch>
  );
};

export default Payment;
