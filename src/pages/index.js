import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../theme/withRoot'

const style = {
  root: {
    padding: '3rem',
  },
  title: {
    flex: 1,
  },
}

function IndexPage({ classes }) {
  return (
    <main className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Gatsby MUI Boilerplate
      </Typography>
      <Typography variant="subtitle1">
        with jest and storybook, and JSS
      </Typography>
    </main>
  )
}

export default withRoot(withStyles(style)(IndexPage))
