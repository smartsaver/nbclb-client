import React from 'react';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Section from '../Section';
import EscapedHtml from '../EscapedHtml';

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
      <Typography variant="h2">{content.apply.title}</Typography>
      <EscapedHtml html={content.apply.text} />
      <iframe
        id="resp"
        className={classes.frame}
        src={content.apply.respUrl}
        frameBorder="0"
        title="StartMyResp Application"
      />
      <EscapedHtml html={content.beforeYouStart.footer} />
    </Section>
  );
}

export default withStyles(styles)(Apply);
