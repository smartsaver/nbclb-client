import React from 'react';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    minHeight: '10rem',
    padding: '3rem 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '3rem 4rem',
    },
  },
  container: {
    margin: '0 auto',
    width: '100%',
    maxWidth: theme.breakpoints.values.xl,
  },
});

/**
 *
 * @param {String} name - section id
 * @param {String} className - css class
 * @param {*} children
 */

function Section(props) {
  const { classes } = props;
  return (
    <section id={props.name} className={`${classes.root} ${props.className}`}>
      <Typography variant="body1" component="div" className={classes.container}>
        {props.children}
      </Typography>
    </section>
  );
}

export default withStyles(styles)(Section);
