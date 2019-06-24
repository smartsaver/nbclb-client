import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import { bannerContent } from './content';
import SEO from '../SEO';
import withRoot from '../../theme/withRoot';
// import Layout from '../Layout';

const style = {
  root: {
    padding: '3rem',
  },
  title: {
    flex: 1,
  },
};

function IndexPage(props) {
  const { classes, location } = props;
  const locale = location.hash.substring(1) || 'en';
  return (
    <>
      <SEO title="Home" />
      <main className={classes.root}>
        <Typography variant="body1">
          <a href="./#en">en</a> / <a href="./#fr">fr</a>
        </Typography>
        {/* <Typography variant="h1">{bannerContent[locale].title}</Typography>
        <Typography variant="body1">{bannerContent[locale].text}</Typography> */}
        <Typography variant="h1">Welcome to NBCLB.ca</Typography>
      </main>
      {/* <Layout>
      </Layout> */}
    </>
  );
}

export default withRoot(withStyles(style)(IndexPage));
