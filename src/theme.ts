import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue["A200"],
    },
    secondary: {
      main: red[500],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'lightgray',
        },
      },
    },
  },
});

export default theme;