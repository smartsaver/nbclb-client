import React from 'react';
import Section from '../Section';
import { Typography } from '@material-ui/core';
import EscapedHtml from '../EscapedHtml';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  frame: {
    width: '100%',
    margin: '1rem 0',
    background: 'white',
    minHeight: '43rem',
  },
};

function Apply(props) {
  const { content, classes } = props;
  return (
    <Section name="apply">
      <Typography variant="h2">{content.title}</Typography>
      <EscapedHtml html={content.text} />
      <iframe
        id="resp"
        className={classes.frame}
        src={content.respUrl}
        frameBorder="0"
        title="StartMyResp Application"
      />
      <EscapedHtml html={content.footer} />
    </Section>
  );
}

export default withStyles(styles)(Apply);
