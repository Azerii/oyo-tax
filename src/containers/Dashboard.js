import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/dashboard/Sidebar';
import theme from '../theme';
import dummy from '../assets/dashboard/dummy.svg';
import searchIcon from '../assets/dashboard/searchIcon.svg';
import plusIcon from '../assets/dashboard/plusIcon.svg';
import paymentSuccess from '../assets/payment/paymentSuccess.svg';
import DataTable from '../components/dashboard/DataTable';
import { Route } from 'react-router';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  background-color: #f2f2f2;

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
    z-index: 10;

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

  .dashContent {
    width: 80%;
    height: 100vh;
    overflow: auto;

    > .inner {
      padding: 4rem 3rem;

      .actionBtnsWrapper {
        display: flex;
        justify-content: space-between;

        &.noTitle {
          justify-content: flex-end;
        }

        .title {
          font-size: 1.25rem;

          span {
            color: #948f8f;
          }
        }

        .actionBtns {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 2.5rem;

          button {
            display: flex;
            align-items: center;
            border-radius: 0.3rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            text-transform: capitalize;

            &.makePayment {
              color: #8f8e8e;
              background-color: #c6c6c6;
              margin-right: 3rem;

              &.active {
                color: #ffffff;
                background-color: ${theme.colors.primary};
              }
            }

            &.add {
              color: #ffffff;
              background-color: ${theme.colors.green};

              img {
                margin-right: 0.25rem;
              }
            }
          }
        }
      }
    }
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 1px solid #8d8d8d;
  background-color: #ffffff;

  .item {
    height: 40%;

    &.search {
      display: flex;
      align-items: center;
      background-color: #f2f2f2;
      padding: 0.5rem 1rem;
      border-radius: 0.2rem;

      .icon {
        height: 100%;
      }

      input {
        height: 100%;
        width: 10rem;
        background-color: transparent;
        border: none;
        padding: 0 1rem;

        &::placeholder {
          color: #9f9f9f;
        }

        &:focus {
          outline: none;
          background-color: #f2f2f2;
        }
      }
    }

    &.user {
      .avatar {
        height: 100%;
        border-radius: 50%;
      }
    }
  }
`;

const FormModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  opacity: 0;
  pointer-events: none;

  &.open {
    opacity: 1;
    pointer-events: all;
  }

  .inner {
    width: 40%;
    margin: 4rem auto;
    background-color: #ffffff;
    padding: 2rem 3rem;
    border-radius: 0.2rem;

    .title {
      font-size: 1.8rem;
      font-weight: 600;
    }

    form {
      .formGroup {
        margin-top: 1.5rem;
      }

      label {
        display: block;
        margin-bottom: 1rem;
        font-size: 1rem;
      }

      input,
      select {
        border: 1px solid #cbcbcb;
        border-radius: 0.2rem;
        width: 100%;
        padding: 1rem;
      }

      .done {
        width: 100%;
        color: #ffffff;
        background-color: ${theme.colors.primary};
        padding: 1rem;
        font-size: 1rem;
        margin-top: 3rem;
      }
    }
  }
`;

const Dashboard = () => {
  const [employees, setEmployees] = useState(
    localStorage.employees ? JSON.parse(localStorage.employees) : []
  );
  const [entities, setEntities] = useState(
    localStorage.entities ? JSON.parse(localStorage.entities) : []
  );
  const [selected, setSelected] = useState(0);

  const handleSubmitEmployees = (e) => {
    e.preventDefault();

    let employeesArr;

    const employeeDetails = {
      name: document.querySelector('input[name="name"]').value || 'NIL',
      payerID: document.querySelector('input[name="payerID"]').value || 'NIL',
      basicSalary:
        document.querySelector('input[name="basicSalary"]').value || 'NIL',
      monthlyTax:
        document.querySelector('input[name="monthlyTax"]').value || 'NIL'
    };

    if (localStorage.employees) {
      employeesArr = JSON.parse(localStorage.employees);
    } else {
      employeesArr = [];
    }

    employeesArr.push(employeeDetails);
    setEmployees(employeesArr);
    localStorage.setItem('employees', JSON.stringify(employeesArr));
  };

  const handleSubmitEntities = (e) => {
    e.preventDefault();

    let entitiesArr;

    const entityDetails = {
      entity: document.querySelector('select[name="entity"]').value || 'NIL',
      payerID: document.querySelector('input[name="payerID"]').value || 'NIL'
    };

    if (localStorage.entities) {
      entitiesArr = JSON.parse(localStorage.entities);
    } else {
      entitiesArr = [];
    }

    entitiesArr.push(entityDetails);
    setEntities(entitiesArr);
    localStorage.setItem('entities', JSON.stringify(entitiesArr));
  };

  const handleCheckboxChange = (e) => {
    const currentChecked = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    // const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    // const checkAllBox = allCheckboxes[0];

    setSelected(currentChecked.length);

    if (!e.target.checked) {
      if (document.querySelectorAll('input[type="checkbox"]')[0].checked) {
        document.querySelectorAll('input[type="checkbox"]')[0].click();
      }
      // if (
      //   currentChecked.length === allCheckboxes.length - 1 &&
      //   !checkAllBox.checked
      // ) {
      //   console.log(checkAllBox, currentChecked.length);
      //   checkAllBox.click();
      // }
    }
  };

  return (
    <Wrapper>
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
          <img src={paymentSuccess} alt="" />
          <p>Payment Successful</p>
        </div>
      </div>
      <Sidebar />
      <div className="dashContent">
        <Header>
          <form className="item search">
            <img className="icon" src={searchIcon} alt="" />
            <input type="text" name="search" placeholder="Search here..." />
          </form>
          <div className="item user">
            <img className="avatar" src={dummy} alt="" />
          </div>
        </Header>

        {/* Company */}
        <Route path="/dashboard/company">
          <FormModal
            id="formModal"
            onClick={(e) => {
              if (e.target.id === 'formModal') {
                e.target.classList.remove('open');
              }
            }}
          >
            <div className="inner">
              <p className="title">Add employee details</p>
              <form onSubmit={(e) => handleSubmitEmployees(e)}>
                <div className="formGroup">
                  <label>Name</label>
                  <input type="text" name="name" required />
                </div>
                <div className="formGroup">
                  <label>Tax Payer's ID</label>
                  <input type="text" name="payerID" required />
                </div>
                <div className="formGroup">
                  <label>Basic Salary</label>
                  <input type="text" name="basicSalary" required />
                </div>
                <div className="formGroup">
                  <label>Monthly tax</label>
                  <input type="text" name="monthlyTax" />
                </div>

                <button
                  type="submit"
                  className="done"
                  onClick={() =>
                    document
                      .querySelector('#formModal')
                      .classList.remove('open')
                  }
                >
                  Done
                </button>
              </form>
            </div>
          </FormModal>
          <div className="inner">
            <div className="actionBtnsWrapper noTitle">
              <div className="actionBtns">
                <button
                  className={`makePayment ${selected ? 'active' : ''}`}
                  disabled={selected ? false : true}
                  onClick={() =>
                    document
                      .querySelector('#paymentSuccess')
                      .classList.add('open')
                  }
                >
                  make payment
                </button>
                <button
                  className="add"
                  onClick={() =>
                    document.querySelector('#formModal').classList.add('open')
                  }
                >
                  <img src={plusIcon} alt="" />
                  <span>add employee details</span>
                </button>
              </div>
            </div>
            <DataTable
              employees={employees}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        </Route>

        {/* Agency */}
        <Route path="/dashboard/agency">
          <FormModal
            id="formModal"
            onClick={(e) => {
              if (e.target.id === 'formModal') {
                e.target.classList.remove('open');
              }
            }}
          >
            <div className="inner">
              <p className="title">Add entity</p>
              <form onSubmit={(e) => handleSubmitEntities(e)}>
                <div className="formGroup">
                  <label>Entity</label>
                  <select name="entity">
                    <option value="School">School</option>
                    <option value="Hospital">Hospital</option>
                  </select>
                </div>
                <div className="formGroup">
                  <label>Tax Payer's ID</label>
                  <input type="text" name="payerID" required />
                </div>

                <button
                  type="submit"
                  className="done"
                  onClick={() =>
                    document
                      .querySelector('#formModal')
                      .classList.remove('open')
                  }
                >
                  Done
                </button>
              </form>
            </div>
          </FormModal>
          <div className="inner">
            <div className="actionBtnsWrapper">
              <p className="title">
                Entities <span>({entities.length + 1})</span>
              </p>
              <div className="actionBtns">
                <button
                  className={`makePayment ${selected ? 'active' : ''}`}
                  disabled={selected ? false : true}
                  onClick={() =>
                    document
                      .querySelector('#paymentSuccess')
                      .classList.add('open')
                  }
                >
                  make payment
                </button>
                <button
                  className="add"
                  onClick={() =>
                    document.querySelector('#formModal').classList.add('open')
                  }
                >
                  <img src={plusIcon} alt="" />
                  <span>add entity</span>
                </button>
              </div>
            </div>
            <DataTable
              entities={entities}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        </Route>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
