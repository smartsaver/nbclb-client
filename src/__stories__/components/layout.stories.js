import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import theme from '../../theme/muiThemeConfig';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

storiesOf('Layout', module).add('Custom Layout of NBCLB', () => (
  <MuiThemeProvider theme={theme}>
    <Layout>
      <Section>
        <Typography variant="h2" paragraph>
          Lorem
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eos nam, nesciunt earum labore alias veritatis. Iusto, voluptatem
          omnis commodi, accusamus rem laudantium hic expedita quod aliquam
          adipisci inventore sunt.
        </Typography>
      </Section>
    </Layout>
  </MuiThemeProvider>
));
