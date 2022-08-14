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
      gray: '#333',
      blue: '#0071eb'
    },
  },
  media: {
    xs: '(max-width: 480px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
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
    body: { width: '100%', height: '100%' },
  });

export const SSRHydrate = () => {
  return (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
};
