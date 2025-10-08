import { createTheme } from '@mui/material/styles';
import { create } from '@mui/material/styles/createTransitions';

// create the theme options
//
const themeOptions = {
  palette: {
    mode: 'light',
    text: {
      primary: '#18069c',
      secondary: 'rgba(201,22,174,0.82)',
    },
    primary: {
      main: '#4e0719',
    },
  },
};

// so this is going to create the theme
export const theme = createTheme(themeOptions);
// exported so that we can use an option here.
