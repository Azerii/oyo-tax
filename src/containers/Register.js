import React from 'react';
import styled from 'styled-components';
import { Redirect, Route, Switch, useHistory } from 'react-router';
import individual_card_icon from '../assets/register/individual_card_icon.svg';
import company_card_icon from '../assets/register/company_card_icon.svg';
import agency_card_icon from '../assets/register/agency_card_icon.svg';
import arrow_right from '../assets/global/arrow_right.svg';
import circleChecked from '../assets/payment/circleChecked.svg';
import Layout from '../components/Layout';
import Card from '../components/Card';
import theme from '../theme';
import FormView from '../components/FormView';
import Grid from '../components/Grid';
import PayerIdSuccess from '../components/PayerIdSuccess';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .registerSuccess {
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

      .prompt {
        font-size: 1rem;
      }

      .payerId {
        font-size: 2rem;
        font-weight: 500;
        margin: 1.5rem 0;
      }

      a {
        display: block;
        margin-top: 2rem;
        color: ${theme.colors.primary};
      }

      img {
        height: 5rem;
        margin-bottom: 1.5rem;
      }
    }
  }

  .caption {
    color: ${theme.colors.light};
    font-size: 200%;
    font-weight: 600;
    text-align: center;
    margin: 2rem 0;
  }

  .results {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    margin-top: 2rem;
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

const options = [
  {
    icon: individual_card_icon,
    bg: 'primary',
    title: 'Individual',
    caption: 'Select this option to sign up an individual',
    actionText: 'Sign up as an individual',
    target: '/register/individual/1'
  },
  {
    icon: company_card_icon,
    bg: 'red',
    title: 'Company',
    caption: 'Select this option to sign up an company',
    actionText: 'Sign up as a company',
    target: '/register/company/1'
  },
  {
    icon: agency_card_icon,
    bg: 'green',
    title: 'Agency',
    caption: 'Select this option to sign up an agency',
    actionText: 'Sign up as an agency',
    target: '/register/company/1'
  }
];

const steps = {
  company: [
    'name & sector',
    'head office',
    'oyo state main office',
    'staff strength',
    'contact person for tax issues',
    'particulars of person completing form'
  ],
  individual: ['step 1', 'step 2', 'step 3']
};

const Register = () => {
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
      {/* SignUp landing */}
      <Route exact path="/register">
        <Layout bg>
          <Wrapper>
            <p className="caption">
              Choose any of the sign up options
              <br />
              of your interest
            </p>
            <div className="results">
              {options.map((item) => (
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

      {/* register as company */}

      <Route exact path="/register/company/1">
        <Layout bg>
          <FormView steps={steps.company} divider>
            <p className="title">{steps.company[0]}</p>
            <form onSubmit={(e) => handleSubmit(e)} className="inner">
              <Grid>
                <p className="label">name of institution</p>
                <input type="text" name="institution" />
              </Grid>
              <Grid>
                <p className="label">RC Number</p>
                <input type="text" name="rc_number" />
              </Grid>
              <Grid>
                <p className="label">Industry Sector</p>
                <select name="industry_sector">
                  <option value="Health">Health</option>
                </select>
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

      <Route exact path="/register/company/2">
        <Layout bg>
          <FormView steps={steps.company} divider>
            <p className="title">{steps.company[1]}</p>
            <form onSubmit={(e) => handleSubmit(e)} className="inner">
              <Grid>
                <p className="label">house number</p>
                <input type="text" name="house_number" />
              </Grid>
              <Grid>
                <p className="label">street name</p>
                <input type="text" name="street_name" />
              </Grid>
              <Grid gridColumn="1/3">
                <p className="label">town</p>
                <select name="town">
                  <option value="Bodija">Bodija</option>
                </select>
              </Grid>
              <Grid gridColumn="3/6">
                <p className="label">local goverment</p>
                <select name="local_government">
                  <option value="Atisba">Atisba</option>
                </select>
              </Grid>
              <Grid gridColumn="1/3">
                <p className="label">state</p>
                <select name="state">
                  <option value="oyo">Oyo</option>
                </select>
              </Grid>
              <Grid gridColumn="3/6">
                <p className="label">country</p>
                <input type="text" name="country" />
              </Grid>
              <Grid>
                <p className="label">postal address</p>
                <input type="text" name="postal_address" />
              </Grid>
              <Grid>
                <p className="label">email</p>
                <input type="email" name="email" />
              </Grid>
              <Grid>
                <p className="label">website</p>
                <input type="text" name="website" />
              </Grid>
              <Grid>
                <p className="label">telephone number</p>
                <input type="text" name="phone" />
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

      <Route exact path="/register/company/3">
        <Layout bg>
          <FormView steps={steps.company} divider>
            <p className="title">{steps.company[2]}</p>
            <form onSubmit={(e) => handleSubmit(e)} className="inner">
              <Grid>
                <p className="label">house number</p>
                <input type="text" name="house_number" />
              </Grid>
              <Grid>
                <p className="label">street name</p>
                <input type="text" name="street_name" />
              </Grid>
              <Grid gridColumn="1/3">
                <p className="label">town</p>
                <select name="town">
                  <option value="Bodija">Bodija</option>
                </select>
              </Grid>
              <Grid gridColumn="3/6">
                <p className="label">local goverment</p>
                <select name="local_government">
                  <option value="Atisba">Atisba</option>
                </select>
              </Grid>
              <Grid>
                <p className="label">postal address</p>
                <input type="text" name="postal_address" />
              </Grid>
              <Grid>
                <p className="label">email</p>
                <input type="email" name="email" />
              </Grid>
              <Grid>
                <p className="label">telephone number</p>
                <input type="text" name="street_name" />
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

      <Route exact path="/register/company/4">
        <Layout bg>
          <FormView steps={steps.company} divider>
            <p className="title">{steps.company[3]}</p>
            <form onSubmit={(e) => handleSubmit(e)} className="inner">
              <Grid>
                <p className="label">number of nigerian staff</p>
                <input type="number" name="number_of_nigerian_staff" />
              </Grid>
              <Grid>
                <p className="label">number of non-nigerian staff</p>
                <input type="number" name="number_of_non_nigerian_staff" />
              </Grid>
              <Grid>
                <p className="label">number of contact staff</p>
                <input type="number" name="number_of_contact_staff" />
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

      <Route exact path="/register/company/5">
        <Layout bg>
          <FormView steps={steps.company} divider>
            <p className="title">{steps.company[4]}</p>
            <form onSubmit={(e) => handleSubmit(e)} className="inner">
              <Grid>
                <p className="label">name of contact person</p>
                <input type="text" name="name" />
              </Grid>
              <Grid>
                <p className="label">contact designation</p>
                <input type="text" name="designation" />
              </Grid>
              <Grid>
                <p className="label">contact's telephone number</p>
                <input type="text" name="phone" />
              </Grid>
              <Grid>
                <p className="label">email address</p>
                <input type="email" name="email" />
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

      <Route exact path="/register/company/6">
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
            <a href="/login">Continue</a>
          </div>
        </PayerIdSuccess>
        <Layout bg>
          <FormView steps={steps.company} divider>
            <p className="title">{steps.company[5]}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document.querySelector('#payerIdSuccess').classList.add('open');
              }}
              className="inner"
            >
              <Grid>
                <p className="label">name</p>
                <input type="text" name="name" />
              </Grid>
              <Grid>
                <p className="label">BVN</p>
                <input type="text" name="bvn" />
              </Grid>
              <Grid>
                <p className="label">designation</p>
                <input type="text" name="designation" />
              </Grid>
              <Grid>
                <p className="label">telephone number</p>
                <input type="text" name="phone" />
              </Grid>
              <Grid>
                <p className="label">date</p>
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
              <Grid>
                <Submit>Done</Submit>
              </Grid>
            </form>
          </FormView>
        </Layout>
      </Route>

      {/* register as indivdual */}

      <Route exact path="/register/individual/1">
        <Layout bg>
          <FormView steps={steps.individual} divider>
            <p className="title">{steps.individual[0]}</p>
            <form onSubmit={(e) => handleSubmit(e)} className="inner">
              <Grid>
                <p className="label">title</p>
                <select name="title">
                  <option value="Mr">Mr</option>
                </select>
              </Grid>
              <Grid>
                <p className="label">surname</p>
                <input type="text" name="surname" />
              </Grid>
              <Grid>
                <p className="label">other names</p>
                <input type="text" name="other_names" />
              </Grid>
              <Grid>
                <p className="label">house number</p>
                <input type="text" name="house_number" />
              </Grid>
              <Grid>
                <p className="label">street name</p>
                <input type="text" name="street_name" />
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

      <Route exact path="/register/individual/2">
        <Layout bg>
          <FormView steps={steps.individual} divider>
            <p className="title">{steps.individual[1]}</p>
            <form onSubmit={(e) => handleSubmit(e)} className="inner">
              <Grid>
                <p className="label">name of area</p>
                <input type="text" name="area" />
              </Grid>
              <Grid>
                <p className="label">town</p>
                <input type="text" name="town" />
              </Grid>
              <Grid>
                <p className="label">local government</p>
                <input type="text" name="local_goverment" />
              </Grid>
              <Grid>
                <p className="label">state</p>
                <input type="text" name="state" />
              </Grid>
              <Grid>
                <p className="label">country</p>
                <input type="text" name="country" />
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

      <Route exact path="/register/individual/3">
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
            <a href="/login">Continue</a>
          </div>
        </PayerIdSuccess>
        <Layout bg>
          <FormView steps={steps.individual} divider>
            <p className="title">{steps.individual[2]}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document.querySelector('#payerIdSuccess').classList.add('open');
              }}
              className="inner"
            >
              <Grid>
                <p className="label">telephone</p>
                <input type="text" name="phone" />
              </Grid>
              <Grid>
                <p className="label">email address</p>
                <input type="email" name="email" />
              </Grid>
              <Grid>
                <p className="label">employment status</p>
                <div className="checkboxOptions">
                  <div>
                    <input
                      className="noBorder"
                      type="radio"
                      name="employment_status"
                      id="inEmployment"
                    />
                    <label htmlFor="inEmployment">In Employment</label>
                  </div>
                  <div>
                    <input
                      className="noBorder"
                      type="radio"
                      name="employment_status"
                      id="selfEmployed"
                    />
                    <label htmlFor="selfEmployed">Self Employed</label>
                  </div>
                </div>
              </Grid>
              <Grid>
                <p className="label grey">If In Employment</p>
              </Grid>
              <Grid gridColumn="1/3">
                <p className="label">employer's name</p>
                <input type="text" name="employer_name" />
              </Grid>
              <Grid gridColumn="3/6">
                <p className="label">employer's business</p>
                <input type="text" name="employer_business" />
              </Grid>
              <Grid>
                <p className="label grey">If Self Employed</p>
              </Grid>
              <Grid gridColumn="1/3">
                <p className="label">business name</p>
                <input type="text" name="business_name" />
              </Grid>
              <Grid gridColumn="3/6">
                <p className="label">address of business</p>
                <input type="text" name="business_address" />
              </Grid>
              <Grid>
                <Submit>Done</Submit>
              </Grid>
            </form>
          </FormView>
        </Layout>
      </Route>

      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Register;
