import styled from 'styled-components';

export const BorderButton = styled.button`
  max-height: 64px;
  max-width: 128px;
  padding: 8px 24px 8px 24px;
  font-size: 15px;
  font-weight: 600;
  color: #139be8;
  border-color: #139be8;
  border-radius: 6px;
  border-width: 2px;

  &:hover {
    cursor: pointer;
  }
`;

export const ClearButton = styled.button`
  min-height: 24px;
  min-width: 24px;
  background-color: transparent;
  border-radius: 6px;
  border-width: 0;

  &:hover {
    cursor: pointer;
  }
`;
