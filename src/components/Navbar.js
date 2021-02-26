import React from 'react';
import styled from 'styled-components';
import logo from '../assets/navbar/logo.svg';
import theme from '../theme';
import Container from './Container';

const Wrapper = styled.div`
  width: 100vw;
  padding: 0.5rem 0;
  background-color: ${theme.colors.light};

  .inner {
    display: flex;
    align-items: center;

    .navBody {
      width: 90%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Brand = styled.a`
  display: block;
  width: 10%;

  .logo {
    width: 80%;
  }
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const NavLink = styled.li`
  padding: 0 1.5rem;

  a {
    color: #000000;
  }
`;

const AuthLinks = styled.div`
  justify-self: flex-end;

  a {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    font-size: 100%;
    border-radius: 0.2rem;

    &.login {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.light};
      border: 1px solid ${theme.colors.primary};
      margin-right: 1.5rem;
    }

    &.register {
      color: ${theme.colors.light};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
  }
`;

const linkItems = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Tax Information',
    href: '/payment'
  },
  {
    title: 'About Us',
    href: '/about'
  },
  {
    title: 'News',
    href: '/news'
  },
  {
    title: 'FAQ',
    href: '/FAQ'
  }
];

const Navbar = () => {
  return (
    <Wrapper>
      <Container className="inner">
        <Brand href="/">
          <img src={logo} alt="" className="logo" />
        </Brand>
        <div className="navBody">
          <Links>
            {linkItems.map((item) => (
              <NavLink key={item.title}>
                <a href="/">{item.title}</a>
              </NavLink>
            ))}
          </Links>
          <AuthLinks>
            <a href="/login" className="login">
              Log In
            </a>
            <a href="/register" className="register">
              Sign Up
            </a>
          </AuthLinks>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
