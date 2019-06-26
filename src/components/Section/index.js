import React from 'react';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '15rem',
    '&:nth-child(2n)': {
      backgroundColor: '#efefef',
    },
  },
  container: {
    margin: '0 auto',
    width: '100%',
    maxWidth: theme.breakpoints.values.xl,
    padding: '3rem 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '2.75rem 4rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2.75rem 6rem',
    },
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
    <section
      id={props.name}
      className={`${classes.root} ${props.className || ''}`}
    >
      <Typography
        paragraph
        variant="body1"
        component="div"
        className={classes.container}
      >
        {props.children}
      </Typography>
    </section>
  );
}

export default withStyles(styles)(Section);
