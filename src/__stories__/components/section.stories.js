import React from 'react';
import { storiesOf } from '@storybook/react';
import Section from '../../components/Section';
import withStyles from '@material-ui/core/styles/withStyles';

storiesOf('Section', module).add('Plain Section', () => {
  const PlainSection = ({ classes }) => (
    <Section className={classes.root}>
      <h1>Hello Section</h1>
    </Section>
  );
  const Component = withStyles({
    root: {
      backgroundColor: '#efefef',
    },
  })(PlainSection);
  return <Component />;
});
