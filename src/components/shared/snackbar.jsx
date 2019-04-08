import React from 'react';
import styled from 'styled-components';

const StyledSnackBar = styled.div`
    visibility: hidden; 
    min-width: 250px; 
    margin-left: -125px; 
    background-color: #333; 
    color: #fff; 
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed; 
    z-index: 1;
    left: 50%;
    bottom: 30px; 
  }

  
  &.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;

export function SnackBar({ children, visible }) {
  return (
    <StyledSnackBar className={visible ? 'show' : ''}>
      {children}
    </StyledSnackBar>
  );
}
