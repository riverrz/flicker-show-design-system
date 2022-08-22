import { styled } from '../../lib/style';

export const InputContainer = styled('div', {
  position: 'relative',
  width: '100%',
  backgroundColor: '$darkGray',
  borderRadius: 4,
  overflow: 'hidden',
  display: 'flex',
  '&:focus-within': {
    backgroundColor: '$gray',
  },
});
export const InputLabelContainer = styled('div', {
  position: 'relative',
  flex: 1,
  variants: {
    error: {
      true: {
        '&::after': {
          content: '',
          display: 'block',
          height: 6,
          left: 0,
          bottom: 0,
          position: 'absolute',
          width: '100%',
          pointerEvents: 'none',
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          borderBottom: '2px solid $orange',
        },
      },
    },
  },
});

export const Label = styled('label', {
  color: '$lightGray',
  fontSize: '$1',
  position: 'absolute',
  left: 20,
  top: '50%',
  transform: 'translateY(-50%)',
  transition: 'font .1s ease,top .1s ease,transform .1s ease',
});

export const Adornment = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 50,
  background: 'transparent',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '$3',
  color: '$lightGray'
});

export const StyledInput = styled('input', {
  display: 'block',
  width: '100%',
  backgroundColor: 'transparent',
  fontSize: '$1',
  boxShadow: 'none',
  outline: 'none',
  border: 0,
  color: '$white',
  height: 50,
  lineHeight: '50px',
  padding: '$4 $5 0',
  position: 'relative',
  [`&:focus~${Label}, &[data-has-text="true"]~${Label}`]: {
    fontSize: 11,
    transform: 'translateY(0)',
    top: 7,
  },
});

export const StyledInputError = styled('div', {
  color: '$orange',
  fontSize: 14,
  padding: '6px 3px',
});
