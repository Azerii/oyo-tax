import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/dashboard/Sidebar';
import theme from '../theme';
import dummy from '../assets/dashboard/dummy.svg';
import searchIcon from '../assets/dashboard/searchIcon.svg';
import plusIcon from '../assets/dashboard/plusIcon.svg';
import DataTable from '../components/dashboard/DataTable';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  background-color: #f2f2f2;

  .dashContent {
    width: 80%;
    height: 100vh;
    overflow: auto;

    > .inner {
      padding: 4rem 3rem;

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
  return (
    <Wrapper>
      <FormModal
        id="formModal"
        onClick={(e) => {
          if (e.target.id === 'formModal') {
            e.target.classList.remove('open');
          }
        }}
      >
        <div className="inner">
          <p className="title">Add employee detail</p>
          <form>
            <div className="formGroup">
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div className="formGroup">
              <label>Entity</label>
              <select name="entity">
                <option>School</option>
              </select>
            </div>
            <div className="formGroup">
              <label>Tax Payer's ID</label>
              <input type="text" name="payerID" />
            </div>
            <div className="formGroup">
              <label>Basic Salary</label>
              <input type="text" name="basicSalary" />
            </div>

            <button type="submit" className="done">
              Done
            </button>
          </form>
        </div>
      </FormModal>
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
        <div className="inner">
          <div className="actionBtns">
            <button className="makePayment">make payment</button>
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
          <DataTable />
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
