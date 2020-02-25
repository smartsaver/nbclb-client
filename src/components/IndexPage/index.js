import React, { Component } from 'react';
import { bannerContent, bodyContent, applyContent, postApplyContent } from './content';
import withStyles from '@material-ui/core/styles/withStyles';
import SEO from '../SEO';
import withRoot from '../../theme/withRoot';
import BodySections from './BodySections';
import Layout from '../Layout';
import Apply from './Apply';
import PostApply from './PostApply';
import Banner from './Banner';

const styles = {
  '@global': {
    html: {
      scrollBehavior: 'smooth',
    },
  },
};

class IndexPage extends Component {
  state = {
    locale: 'en',
  };

  handleLocaleChange = value => {
    if (!(value === 'en' || value === 'fr')) return;
    this.setState({ locale: value });
  };

  render() {
    const { state } = this;
    return (
      <>
        <SEO title="Home" />
        <Layout onLocaleChange={this.handleLocaleChange}>
          <main>
            <Banner content={bannerContent[state.locale]} />
            <BodySections content={bodyContent} locale={state.locale} />
            <Apply content={applyContent[state.locale]} />
            <PostApply content={postApplyContent[state.locale]} />
          </main>
        </Layout>
      </>
    );
  }
}

export default withRoot(withStyles(styles)(IndexPage));
