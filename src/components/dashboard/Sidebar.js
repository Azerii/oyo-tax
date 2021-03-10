import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/navbar/logo.svg';
import dashboardIcon from '../../assets/dashboard/dashboardIcon.svg';
import historyIcon from '../../assets/dashboard/historyIcon.svg';
import theme from '../../theme';

const Wrapper = styled.div`
  position: relative;
  z-index: 7;
  width: 20%;
  height: 100vh;
  overflow: auto;
  border-right: 1px solid #8d8d8d;
  background-color: #ffffff;
  padding-left: 2rem;
  padding-right: 1rem;

  .navWrapper {
    padding: 3rem 0;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: ${theme.borderLight};

  .logo {
    height: 4rem;
  }
`;

const NavItem = styled.a`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 1rem 0;
  padding: 0.5rem;

  &.active,
  &:hover {
    background-color: #e3f6d5;

    .iconWrapper {
      img {
        filter: ${theme.greenFilter};
      }
    }

    .textWrapper {
      p {
        filter: ${theme.greenFilter};
      }
    }
  }

  .iconWrapper {
    width: 15%;
    margin-right: 1rem;

    img {
      width: 100%;
    }
  }

  .textWrapper {
    p {
      color: #9f9f9f;
      font-size: 100%;
      font-weight: 500;
      text-transform: capitalize;
    }
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <Header>
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </Header>
      <div className="navWrapper">
        <NavItem href={window.location.href} className="active">
          <div className="iconWrapper">
            <img src={dashboardIcon} alt="" />
          </div>
          <div className="textWrapper">
            <p>Employees</p>
          </div>
        </NavItem>
        <NavItem href={window.location.href}>
          <div className="iconWrapper">
            <img src={historyIcon} alt="" />
          </div>
          <div className="textWrapper">
            <p>History</p>
          </div>
        </NavItem>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
