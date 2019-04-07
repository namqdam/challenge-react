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
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin-right: 4px;

  &:checked {
    background-color: gray;
  }
`;

const StyledCheckboxLabel = styled.label`
  color: white;
`;

export class Checkbox extends React.Component {
  render() {
    const { checked, id, name, onChange } = this.props;
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
}
