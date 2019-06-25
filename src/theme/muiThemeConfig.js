import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: 50,
      fontWeight: 300,
    },
    h2: {
      fontSize: 32,
      fontWeight: 400,
    },
    h3: {
      fontSize: 30,
    },
    h4: {
      fontSize: 25,
      fontWeight: 300,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 18,
      fontWeight: 300,
    },
  },
});

export default theme;
