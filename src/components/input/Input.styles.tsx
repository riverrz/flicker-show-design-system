import { styled } from '../../lib/style';

export const InputContainer = styled('div', {
  position: 'relative',
  width: '100%',
});
export const InputLabelContainer = styled('div', {
  position: 'relative',
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

export const StyledInput = styled('input', {
  display: 'block',
  width: '100%',
  backgroundColor: '$darkGray',
  fontSize: '$1',
  boxShadow: 'none',
  outline: 'none',
  border: 0,
  borderRadius: 4,
  color: '$white',
  height: 50,
  lineHeight: 50,
  padding: '$4 $5 0',
  position: 'relative',
  boxSizing: 'border-box',
  '&:focus': {
    backgroundColor: '$gray',
  },
  [`&:focus~${Label}`]: {
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
