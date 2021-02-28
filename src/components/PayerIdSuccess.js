import styled from 'styled-components';
import theme from '../theme';

const PayerIdSuccess = styled.div`
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
`;

export default PayerIdSuccess;
