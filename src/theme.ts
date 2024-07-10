import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#191970',
        },
        secondary: {
            main: '#232323',
        },
    },
  typography:{
        fontFamily: "Helvetica Neue, sans-serif"
  }
});

theme = responsiveFontSizes(theme);


export default theme;