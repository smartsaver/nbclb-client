import React from 'react';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import eligibilityImage from '../../images/family_with_stroller.jpg';
import Section from '../Section';
import EscapedHtml from '../EscapedHtml';
import ApplyTable from './ApplyTable';
import './BodySections.css'

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
  eligibility: {
    background: `url(${eligibilityImage}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  eligibilityImage: {
    width: "100%",
    maxHeight: '33%',
    backgroundPosition: 'center',
  },
  eligibilityTitle: {
    fontWeight: 500,
    color: 'white',
    textShadow: '1.5px 2px rgba(17,17,17,.7)',
    margin: '0 1rem',
  },
  eligibilityText: {
    fontWeight: 700,
    color: 'white',
    textShadow: '1.5px 2px rgba(17,17,17,.7)',
    margin: '0 1rem',
  },
  covid: {
    textAlign: 'center',
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
          <Section style={styles.eligibility}>
            <Typography variant="h2" style={styles.eligibilityTitle}>
              {content[props.locale].eligibility.title}
            </Typography>
            <EscapedHtml style={styles.eligibilityText} className="WhiteLink" html={content[props.locale].eligibility.text} />
          </Section>
          <Section>
            <Typography variant="h2">
              {content[props.locale].apply.title}
            </Typography>
            <EscapedHtml html={content[props.locale].apply.text} />
          </Section>
          {/* <ApplyTable
              headers={['City', 'Date and Time', 'Location']}
              content={content["table"]}
            /> */}
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
