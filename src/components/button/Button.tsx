import { styled } from '../../lib/style';

export const Button = styled('button', {
  fontSize: 16,
  fontWeight: 700,
  padding: 16,
  backgroundColor: '$primary',
  color: '$white',
  lineHeight: '1em',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  borderRadius: 6,

  variants: {
    fullWidth: {
      true: {
        display: 'block',
        width: '100%',
      },
    },
  },
});
