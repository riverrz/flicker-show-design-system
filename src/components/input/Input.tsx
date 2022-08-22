import React, { ReactNode } from 'react';
import {
  InputContainer,
  Label,
  StyledInput,
  StyledInputError,
  InputLabelContainer,
  Adornment,
} from './Input.styles';

interface Props extends React.ComponentPropsWithRef<typeof StyledInput> {
  label: string;
  error?: boolean;
  errorMsg?: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

export const Input = (props: Props) => {
  const {
    label,
    startAdornment,
    endAdornment,
    error,
    errorMsg,
    id,
    value,
    onChange,
    ...inputProps
  } = props;
  return (
    <InputContainer>
      {startAdornment && <Adornment>{startAdornment}</Adornment>}
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
      {endAdornment && <Adornment>{endAdornment}</Adornment>}
      {error && <StyledInputError>{errorMsg}</StyledInputError>}
    </InputContainer>
  );
};
