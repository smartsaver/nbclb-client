import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: 50,
      fontWeight: 500,
    },
  },
})

export default theme
