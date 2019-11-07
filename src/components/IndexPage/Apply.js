import React from 'react';
import Section from '../Section';
import { Typography } from '@material-ui/core';
import EscapedHtml from '../EscapedHtml';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  frame: {
    margin: '1rem 0',
    background: 'white',
  },
  frameWrapper: {
    position: 'relative',
  },
  frameLink: {
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  frameSize: {
    width: '100%',
    minHeight: '43rem',
  },
};

function Apply(props) {
  const { content, classes } = props;
  return (
    <Section name="apply">
      <Typography variant="h2">{content.title}</Typography>
      <EscapedHtml html={content.text} />

      <div className={classes.frameWrapper}>
        <a
          className={`${classes.frameLink} ${classes.frameSize}`}
          href={content.respUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Typography variant="srOnly">StartMyResp Application</Typography>
        </a>
        <iframe
          id="resp"
          className={`${classes.frame} ${classes.frameSize}`}
          src={content.respUrl}
          frameBorder="0"
          title="StartMyResp Application"
        />
      </div>
      <EscapedHtml html={content.footer} />
    </Section>
  );
}

export default withStyles(styles)(Apply);
