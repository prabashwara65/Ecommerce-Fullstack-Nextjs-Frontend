import React, { Children } from 'react'
import styled from 'styled-components';

const StyledDIv = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding 0 20px;
`;

const Center = ({children}) => {
  return (
    <StyledDIv>
      {children}
    </StyledDIv>
  );
}

export default Center
