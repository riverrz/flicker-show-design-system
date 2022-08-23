import React from 'react';
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#e50914',
      black: '#000',
      white: '#fff',
      darkGray: '#333',
      gray: '#454545',
      lightGray: '#8c8c8c',
      blue: '#0071eb',
      orange: '#e87c03',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
    },
    fontSizes: {
      1: '16px',
    },
  },
  media: {
    xs: '(max-width: 480px)',
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
  },
  utils: {
    marginX: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const normalizeCSS = () =>
  globalCss({
    '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
    html: { width: '100%', height: '100%' },
    body: { width: '100%', height: '100%', userSelect: 'none' },
  });

export const SSRHydrate = () => {
  return (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
};
