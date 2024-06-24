import React from 'react';
import styled, { css } from 'styled-components';

// Define ButtonStyle directly using styled-components css`` instead of styled-jsx/css``
const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `};

  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `};

  ${(props) =>
    props.primary &&
    css`
      background-color: #5542f6;
      color: #fff;
      border: 1px solid #5542f6; /* Adding border for primary button */
      
      ${(props.outline) &&
        css`
          background-color: transparent;
          color: #5542f6;
        `
      }
    `};

  ${(props) =>
    props.size === 'l' &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
    `};
`;

// StyledButton component using styled-components
const StyledButton = styled.button`
  ${ButtonStyle}
`;

const PrimaryBtn = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export default PrimaryBtn;
