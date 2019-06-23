import React from 'react';
import { storiesOf } from '@storybook/react';
import Section from '../../components/Section';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import marked from '../../libs/marked';

storiesOf('Section', module)
  .add('Plain Section', () => {
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
  })
  .add('Section With title and text', () => {
    const text = marked(`
Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    
Deleniti tenetur, voluptates dolor eveniet nobis autem laudantium nostrum soluta ducimus molestiae vitae animi voluptate similique enim voluptas sit consequuntur alias sunt.
    `);
    return (
      <>
        <Section>
          <Typography variant="h2">Title of the section</Typography>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </Section>
        <Section>
          <Typography variant="h2">Second Title</Typography>
        </Section>
      </>
    );
  });
