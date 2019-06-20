import React from 'react';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SEO from '../SEO';
import withRoot from '../../theme/withRoot';

const style = {
  root: {
    padding: '3rem',
  },
  title: {
    flex: 1,
  },
};

const locale = {
  en: <h1>hello</h1>,
  fr: <h1>bonjour</h1>,
};

function IndexPage(props) {
  const { classes } = props;
  const renderLocale = () =>
    locale[props.location.hash.substring(1)] || locale.en;
  return (
    <>
      <SEO title="Home" />
      <main className={classes.root}>
        <a href="./#en">en</a> / <a href="./#fr">fr</a>
        {renderLocale()}
      </main>
    </>
  );
}

export default withRoot(withStyles(style)(IndexPage));
