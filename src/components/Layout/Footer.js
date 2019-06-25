import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Section from '../Section';
import withStyles from '@material-ui/core/styles/withStyles';
import grey from '@material-ui/core/colors/grey';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    minHeight: '15rem',
    backgroundColor: grey[200],
  },
  section: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  links: {
    fontWeight: '600',
    '& a:first-child': {
      marginRight: '1rem',
    },
    '& a + a': {
      margin: '0 1rem',
    },
  },
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <Section className={classes.section}>
        <Typography variant="body1">
          Copyright &copy; 2019. SmartSAVER.org
        </Typography>
        <Typography classes={{ root: classes.links }} variant="body1">
          <Link
            href="https://www.smartsaver.org/privacy.shtml"
            target="_blank"
            rel="noopener noreferrer"
          >
            PRIVACY POLICY
          </Link>
          |
          <Link
            href="https://www.smartsaver.org/terms-conditions.shtml"
            target="_blank"
            rel="noopener noreferrer"
          >
            TERMS & CONDITIONS
          </Link>
          |
          <Link
            href="http://community.smartsaver.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            COMMUNITY SITE
          </Link>
        </Typography>
      </Section>
    </footer>
  );
}

export default withStyles(styles)(Footer);
