import React, { ReactNode } from 'react';
import { FormControlContainer } from "./FormControl.styles";

interface Props extends React.ComponentProps<typeof FormControlContainer>{
  children: ReactNode;
}

export const FormControl = (props: Props) => {
  const { fullWidth, children } = props;
  return (
    <FormControlContainer fullWidth={fullWidth}>
      {children}
    </FormControlContainer>
  )
}
