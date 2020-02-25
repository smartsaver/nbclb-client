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

function PostApply(props) {
  const { content, classes } = props;
  return (
    <>
      <Section>
        <Typography variant="h2">
        {content.applyByPhone.title}
        </Typography>
        <EscapedHtml html={content.applyByPhone.text} />
      </Section>
      <Section>
        <Typography variant="h2">
          {content.applyInPerson.title}
        </Typography>
        <EscapedHtml html={content.applyInPerson.text} />
      </Section>
      <Section>
        <Typography variant="h2">
          {content.beforeYouStart.title}
        </Typography>
        <EscapedHtml html={content.beforeYouStart.text} />
      </Section>
      <Section>
        <Typography variant="h2">
          {content.contact.title}
        </Typography>
        <EscapedHtml html={content.contact.text} />
      </Section>
      <Section>
        <Typography variant="h2">
          {content.about.title}
        </Typography>
        <EscapedHtml html={content.about.text} />
      </Section>
    </>
  );
}

export default withStyles(styles)(PostApply);
