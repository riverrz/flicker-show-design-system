import { styled } from '../../lib/style';

export const FormControlContainer = styled('div', {
  alignItems: 'center',
  display: 'inline-flex',
  marginX: '$2',
  variants: {
    fullWidth: {
      true: {
        display: 'flex',
        marginY: '$4',
        marginX: 0,
      },
    },
  },
});
