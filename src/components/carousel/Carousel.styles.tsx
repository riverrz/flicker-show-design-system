import { styled } from '../../lib/style';

export const ArrowContainer = styled('span', {
  height: '100%',
  position: 'absolute',
  top: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: '$white',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  zIndex: 20,
  width: '4%',
  opacity: 0,
  visibility: 'hidden',
  variants: {
    left: {
      true: {
        left: 0,
      },
    },
    right: {
      true: {
        right: 0,
      },
    },
  },
});

export const CarouselContainer = styled('div', {
  position: 'relative',
  zIndex: 0,
  [`&:hover ${ArrowContainer}`]: {
    opacity: 1,
    visibility: 'visible',
  },
});

export const Slider = styled('div', {
  position: 'relative',
  paddingX: '4%',
  touchAction: 'pan-y',
  scrollBehavior: 'smooth',
  overflowX: 'hidden'
});

export const SliderPeek = styled('div', {
  overflowX: 'visible',
  display: 'flex',
  gap: '0.2vw',
  flexWrap: 'nowrap',
});

export const CarouselItem = styled('div', {
  flexShrink: 0,
  width: '20%',
  '@md': {
    width: '25%',
  },
  '@sm': {
    width: '33.333%',
  },
  '@xs': {
    width: '50%',
  },
});
