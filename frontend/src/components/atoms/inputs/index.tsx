import { useState } from "react";
import { StyledCheckBox, StyledInput, StyledSelect } from "./style";

export const CheckBox = (props: {
  name: string;
  checked: boolean;
  onChange: Function;
}) => {
  return (
    <StyledCheckBox
      onClick={() => props.onChange(!props.checked)}
      checked={props.checked}
      onChange={() => props.onChange(!props.checked)}
    >
      <input
        checked={props.checked}
        type="checkbox"
        name={props.name}
        id={props.name}
      />
      <div></div>
    </StyledCheckBox>
  );
};

export const Input = (props: {
  alternativeColor: boolean;
  onChange: Function;
  value: string;
}) => {
  return (
    <StyledInput
      onChange={(e) => props.onChange(e.target.value)}
      value={props.value}
      alternativeColor={props.alternativeColor}
      required
    />
  );
};

export const Select = (props: {
  selected: number;
  onChange: Function;
  options: Array<{ id: number; name: string }>;
  alternativeColor: boolean;
}) => {
  return (
    <StyledSelect alternativeColor={props.alternativeColor}>
      {props.options.map((option) => (
        <option
          key={`select-option-${option.id}-${option.name}`}
          value={option.id}
        >
          {option.name}
        </option>
      ))}
    </StyledSelect>
  );
};
