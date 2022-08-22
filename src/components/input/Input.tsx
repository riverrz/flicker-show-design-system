import React from 'react';
import {
  InputContainer,
  Label,
  StyledInput,
  StyledInputError,
  InputLabelContainer,
} from './Input.styles';

interface Props extends React.ComponentPropsWithRef<typeof StyledInput> {
  label: string;
  error?: boolean;
  errorMsg?: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props: Props) => {
  const { label, error, errorMsg, id, value, onChange, ...inputProps } = props;
  return (
    <InputContainer>
      <InputLabelContainer error={error}>
        <StyledInput
          {...inputProps}
          id={id}
          value={value}
          onChange={onChange}
          data-has-text={value ? true : false}
        />
        <Label htmlFor={id}>{label}</Label>
      </InputLabelContainer>
      {error && <StyledInputError>{errorMsg}</StyledInputError>}
    </InputContainer>
  );
};
