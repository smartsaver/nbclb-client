import React from 'react';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Section from '../Section/SectionWithoutContainer';
import bannerLogo from '../../images/anetas-son-overlay.jpg';

const styles = theme => ({
  root: {
    marginTop: '3rem',
    padding: 0,
  },
  container: {
    maxWidth: theme.breakpoints.values.xl,
    padding: '3rem 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '2.75rem 4rem',
    },
  },
  bannerLogo: {
    background: `url(${bannerLogo}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '38rem',
    [theme.breakpoints.up('lg')]: {
      backgroundPositionY: '-9.5rem',
    },
  },
  title: {
    fontWeight: 500,
    color: 'white',
    textShadow: '1px 1.5px rgba(17,17,17,.7);',
    margin: '0 1rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 4rem',
      textAlign: 'center',
    },
  },
});

function Banner(props) {
  const { classes, content } = props;
  return (
    <Section className={classes.root}>
      <div className={classes.container + ' ' + classes.bannerLogo}>
        <Typography className={classes.title} variant="h1">
          {content.title}
        </Typography>
        <br/>
        <Typography className={classes.title} variant="h2">
          {content.text}
        </Typography>
      </div>
    </Section>
  );
}

export default withStyles(styles)(Banner);
