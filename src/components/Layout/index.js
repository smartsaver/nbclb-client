import React from 'react';
import navbarLogoEn from '../../images/pei-logo-en.jpg';
import navbarLogoFr from '../../images/pei-logo-fr.jpg';
import Navbar from '../Navbar';
import NavbarDrawer from '../Navbar/NavbarDrawer';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Typography, ListItem } from '@material-ui/core';
import Footer from './Footer';

let navbarLogo = navbarLogoEn;

const styles = {
  navbarLogo: {
    maxWidth: '10rem',
    height: '80px',
    paddingTop: '5px',
    paddingBottom: '5px',
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
  const ApplyButton = () => (
    <Button variant="contained" color="primary">
      Apply
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
    if (locale == "en")
      navbarLogo = navbarLogoEn;
    else 
      navbarLogo = navbarLogoFr;
    props.onLocaleChange(locale);
  };
  return (
    <>
      <Navbar
        brand={
          <img className={classes.navbarLogo} src={navbarLogo} alt="PEI" />
        }
        menuEnd={
          <>
            <a href="./#apply" className={classes.linkButton}>
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
            <a href="./#apply" className={classes.linkButton}>
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
