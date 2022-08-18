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
}

export const Input = (props: Props) => {
  const { label, error, errorMsg, id, ...inputProps } = props;
  return (
    <InputContainer>
      <InputLabelContainer error={error}>
        <StyledInput {...inputProps} id={id} />
        <Label htmlFor={id}>{label}</Label>
      </InputLabelContainer>
      {error && <StyledInputError>{errorMsg}</StyledInputError>}
    </InputContainer>
  );
};
