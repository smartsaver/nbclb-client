import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
import { bannerContent } from './content';
import SEO from '../SEO';
import withRoot from '../../theme/withRoot';
import Layout from '../Layout';
import Banner from './Banner';

function IndexPage(props) {
  const { location } = props;
  const locale = location.hash.substring(1) || 'en';
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <main>
          <Banner content={bannerContent[locale]} />
        </main>
      </Layout>
    </>
  );
}

export default withRoot(IndexPage);
