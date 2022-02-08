import * as React from 'react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    allVariants: {
      color: '#000000',
    },
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    body1: {
      fontWeight: 'bold',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 700,
    },
    h5: {
      fontWeight: 'bolder',
      fontSize: '2em',
      fontFamily: '"sans-serif", "arial"',
    },
    label: {
      fontFamily: '"sans-serif", "arial"',
      fontWeight: 900,
      color: '#000000',
      fontSize: '80%',
      textTransform: 'uppercase',
      letterSpacing: '.6px',
      paddingLeft: '2px',
    },
  },
  palette: {
    primary: { main: '#f14140' },
    action: {
      active: '#f14140',
      hover: '#f14140',
      hoverOpacity: 0.7,
      focus: '#f14140',
      focusOpacity: 1,
      selected: '#f14140',
      selectedOpacity: 1,
    },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 6,
});

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    label: React.CSSProperties;
  }

  // allow configuration using `createMuiTheme`
  interface TypographyOptions {
    label?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    label: true;
  }
}
