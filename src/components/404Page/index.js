import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SEO from '../SEO';
import withRoot from '../../theme/withRoot';

const styles = {
  root: {
    padding: '1rem',
  },
};

function PageNotFound(props) {
  const { classes } = props;
  return (
    <>
      <SEO title="Page Not Found" />
      <main className={classes.root}>
        <Typography variant="h1">Page Not Found.</Typography>
      </main>
    </>
  );
}

export default withRoot(withStyles(styles)(PageNotFound));
