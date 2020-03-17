import React, { Component } from 'react';
import { bannerContent, bodyContent, applyContent } from './content';
import SEO from '../SEO';
import withRoot from '../../theme/withRoot';
import Layout from '../Layout';
import Banner from './Banner';
import BodySections from './BodySections';
import Apply from './Apply';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  '@global': {
    html: {
      scrollBehavior: 'smooth',
    },
  },
  covid: {
    textAlign: 'center',
    background: 'red',
  },
  fix: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 4,
    paddingBottom: 4
  }
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
            <div style={styles.covid}>
              <h2 style={styles.fix}>
                Due to the COVID-19 disruptions, all families will experience longer than usual wait times to set up an appointment with their bank to complete the application process.
                The current wait time at some banks is estimated to be 14-30 business days.
              </h2>
            </div>
            <BodySections content={bodyContent} locale={state.locale} />
            <Apply content={applyContent[state.locale]} />
          </main>
        </Layout>
      </>
    );
  }
}

export default withRoot(withStyles(styles)(IndexPage));
