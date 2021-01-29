import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Grid = styled.div`
  grid-column: ${(props) => props.gridColumn || '1/4'};
  display: flex;
  flex-direction: column;
  position: relative;

  .label {
    font-size: 90%;
    margin-bottom: 0.5rem;
    text-transform: capitalize;

    &.grey {
      color: ${theme.colors.grey};
    }
  }

  input {
    padding: 1rem;
    border: 1px solid ${theme.colors.lightgrey};
    border-radius: 0.2rem;

    &.noBorder {
      border: none;
      margin-right: 1rem;
    }

    &::placeholder {
      color: ${theme.colors.lightgrey};
    }
  }

  select {
    width: 100%;
    padding: 1rem;
    border: 1px solid ${theme.colors.lightgrey};
    border-radius: 0.2rem;

    &::disabled {
      color: ${theme.colors.lightgrey};
    }
  }

  .checkboxOptions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Grid;
