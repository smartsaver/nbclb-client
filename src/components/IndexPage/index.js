import React, { Component } from 'react';
import { bannerContent, bodyContent, applyContent } from './content';
import SEO from '../SEO';
import withRoot from '../../theme/withRoot';
import Layout from '../Layout';
import Banner from './Banner';
import BodySections from './BodySections';
import withStyles from '@material-ui/core/styles/withStyles';

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
        <Layout onLocaleChange={this.handleLocaleChange} locale={state.locale}>
          <main>
            <Banner content={bannerContent[state.locale]} />
            <BodySections content={bodyContent} locale={state.locale} />
          </main>
        </Layout>
      </>
    );
  }
}

export default withRoot(withStyles(styles)(IndexPage));
