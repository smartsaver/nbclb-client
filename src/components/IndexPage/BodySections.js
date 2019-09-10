import React from 'react';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Section from '../Section';
import EscapedHtml from '../EscapedHtml';

const styles = {
  video: {
    margin: '0 auto',
    textAlign: 'center',
    '& iframe': {
      width: '100%',
      maxWidth: '480px',
      minHeight: '20rem',
    },
  },
};

/**
 * @description - Body Sections Component renders a list of sections if it exist.
 * There are multiple sections in en, so an if statement is controlling the components.
 * @param {Object} content - body section content, french and english
 * @param {string} locale - 'en' or 'fr'
 */

function BodySections(props) {
  const { classes, content } = props;
  const SectionForEn = () => {
    if (props.locale === 'en')
      return (
        <>
          <Section>
            <Typography variant="h2">
              {content[props.locale].funding.title}
            </Typography>
            <EscapedHtml html={content[props.locale].funding.text} />
          </Section>
          <Section>
            <Typography variant="h2">
              {content[props.locale].eligibility.title}
            </Typography>
            <EscapedHtml html={content[props.locale].eligibility.text} />
          </Section>
          <Section>
            <Typography variant="h2">
              {content[props.locale].apply.title}
            </Typography>
            <EscapedHtml html={content[props.locale].apply.text} />
          </Section>
        </>
      );
    else if (props.locale === 'fr')
      return (
        <Section>
          <Typography variant="h2">
            {content[props.locale].apply.title}
          </Typography>
          <EscapedHtml html={content[props.locale].apply.text} />
        </Section>
      );
  };
  return (
    <>
      <Section>
        {content[props.locale].didYouKnow.title ? (
          <Typography variant="h2">
            {content[props.locale].didYouKnow.title}
          </Typography>
        ) : null}
        <EscapedHtml html={content[props.locale].didYouKnow.text} />
        <div className={classes.video}>
          <iframe
            src={content[props.locale].videoUrl}
            title="Smartsaver Youtube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Section>
      <SectionForEn />
    </>
  );
}

export default withStyles(styles)(BodySections);
