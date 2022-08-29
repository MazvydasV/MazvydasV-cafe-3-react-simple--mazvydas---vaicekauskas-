import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 780,
      lg: 992,
      xl: 1200,
      xxl: 1536,
    },
  },

  shape: {
    borderRadius: 4,
  },

  zIndex: {
    appBar: 1300,
  },
});

const mixinTheme = createTheme(baseTheme, {
  mixins: {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '64px',
      padding: baseTheme.spacing(0, 2),
    },
  },
});

const createColor = (color) => mixinTheme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme(mixinTheme, {
  palette: {
    background: {
      default: '#ffc400',
    },
    primary: {
      ...createColor('#52b202'),
      contrastText: baseTheme.palette.common.white,
    },
    secondary: createColor('#ffa000'),
  },
});

// https://mui.com/material-ui/customization/dark-mode/
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default lightTheme;
