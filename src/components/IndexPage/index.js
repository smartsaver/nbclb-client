import React, { Component } from 'react';
import { bannerContent, bodyContent } from './content';
import SEO from '../SEO';
import withRoot from '../../theme/withRoot';
import Layout from '../Layout';
import Banner from './Banner';
import BodySections from './BodySections';

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
          </main>
        </Layout>
      </>
    );
  }
}

export default withRoot(IndexPage);
