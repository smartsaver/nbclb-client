import React from 'react';
import { storiesOf } from '@storybook/react';
import Section from '../../components/Section';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import marked from '../../libs/marked';
import theme from '../../theme/muiThemeConfig';
import { MuiThemeProvider } from '@material-ui/core/styles';

storiesOf('Section', module)
  .add('Plain Section', () => {
    const PlainSection = ({ classes }) => (
      <MuiThemeProvider theme={theme}>
        <Section className={classes.root}>
          <h1>Hello Section</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Deleniti tenetur, voluptates dolor eveniet nobis autem laudantium
            nostrum soluta ducimus molestiae vitae animi voluptate similique
            enim voluptas sit consequuntur alias sunt.
          </p>
        </Section>
      </MuiThemeProvider>
    );
    const Component = withStyles({
      root: {
        backgroundColor: '#efefef',
      },
    })(PlainSection);
    return <Component />;
  })
  .add('Section With parsed Markdown', () => {
    const text = marked(`
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur magnam ipsum aliquid, tempora iste consequatur et earum facilis soluta odit nam eveniet hic odio eligendi quod praesentium autem alias aut?
    
Deleniti tenetur, voluptates dolor eveniet nobis autem laudantium nostrum soluta ducimus molestiae vitae animi voluptate similique enim voluptas sit consequuntur alias sunt.

[visit link](/#link)
    `);
    return (
      <MuiThemeProvider theme={theme}>
        <Section>
          <Typography variant="h2">Title of the section</Typography>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </Section>
        <Section>
          <Typography variant="h2">Second Section</Typography>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </Section>
      </MuiThemeProvider>
    );
  });
