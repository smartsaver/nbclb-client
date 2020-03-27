import React from 'react';
import navbarLogoEn from '../../images/MySmartFUTURE.jpg';
import navbarLogoFr from '../../images/MonEducAvenir.jpg';
import Navbar from '../Navbar';
import NavbarDrawer from '../Navbar/NavbarDrawer';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Typography, ListItem } from '@material-ui/core';
import Footer from './Footer';

const styles = {
  navbarLogo: {
    maxWidth: '10rem',
  },
  linkButton: {
    textDecoration: 'none',
    '& button': {
      backgroundColor: '#0069c0',
    },
    '& button:hover': {
      backgroundColor: '#005cb2',
    },
  },
  localeContainer: {
    marginLeft: '1rem',
    '& > button': {
      textDecoration: 'none',
      fontWeight: '300',
      color: '#616161',
    },
    '& > button:hover': {
      textDecoration: 'underline',
    },
  },
  drawerItem: {
    justifyContent: 'center',
  },
};

/**
 *
 * @param {function} onLocaleChange(value) - passes locale value from any events
 */

function Layout(props) {
  const { classes } = props;
  let navbarLogo = navbarLogoEn;
  const ApplyButton = () => (
    <Button variant="contained" color="primary">
      {(props.locale == "en") ? "Submit" : "Envoyer"}
    </Button>
  );
  const LocaleButtonList = () => (
    <>
      <Button onClick={handleLocaleClick} variant="text">
        en
      </Button>
      <span> / </span>
      <Button onClick={handleLocaleClick} variant="text">
        fr
      </Button>
    </>
  );
  const handleLocaleClick = event => {
    const locale = event.target.textContent;
    props.onLocaleChange(locale);
  };
  return (
    <>
      <Navbar
        brand={
          <img className={classes.navbarLogo} src={(props.locale == "en") ? navbarLogoEn : navbarLogoFr} alt="ESIC" />
        }
        menuEnd={
          <>
            <a href={(props.locale == "en") ? "./#submit" : "./#envoyer"} className={classes.linkButton}>
              <ApplyButton />
            </a>
            <Typography
              className={classes.localeContainer}
              variant="body1"
              component="div"
            >
              <LocaleButtonList />
            </Typography>
          </>
        }
        renderDrawer={({ isOpen, closeDrawer }) => (
          <NavbarDrawer isOpen={isOpen} onClose={closeDrawer}>
            <a href={(props.locale == "en") ? "./#submit" : "./#envoyer"} className={classes.linkButton}>
              <ListItem className={classes.drawerItem}>
                <ApplyButton />
              </ListItem>
            </a>
            <ListItem className={classes.drawerItem}>
              <LocaleButtonList />
            </ListItem>
          </NavbarDrawer>
        )}
      />
      {props.children}
      <Footer />
    </>
  );
}

export default withStyles(styles)(Layout);
