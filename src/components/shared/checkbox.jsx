import React from 'react';
import styled from 'styled-components';

const StyledCheckboxWrapper = styled.div`
  white-space: nowrap;
  display: inline;
  margin: 0px 6px 0px 6px;
`;

const StyledCheckbox = styled.input`
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-color: #ffffff;
  border: 6px solid #ffffff;
  border-radius: 50%;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin-right: 4px;

  &:checked {
    border: 6px solid #139be8;
    background-color: #ffffff;
  }
`;

const StyledCheckboxLabel = styled.label`
  color: #0d0d0d;
`;

export function Checkbox({ checked, id, name, onChange }) {
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        id={id}
        name={name}
        onChange={onChange}
      />
      <StyledCheckboxLabel htmlFor={id}>{name}</StyledCheckboxLabel>
    </StyledCheckboxWrapper>
  );
}
