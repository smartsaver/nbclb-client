import React from 'react';
import navbarLogo from '../../images/nova-scotia-logo.jpg';
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
    props.onLocaleChange(locale);
  };
  return (
    <>
      <Navbar
        brand={
          <img className={classes.navbarLogo} src={navbarLogo} alt="Nova Scotia" />
        }
        menuEnd={
          <>
            <a href="./#apply" className={classes.linkButton}>
              <ApplyButton />
            </a>
          </>
        }
        renderDrawer={({ isOpen, closeDrawer }) => (
          <NavbarDrawer isOpen={isOpen} onClose={closeDrawer}>
            <a href="./#apply" className={classes.linkButton}>
              <ListItem className={classes.drawerItem}>
                <ApplyButton />
              </ListItem>
            </a>
          </NavbarDrawer>
        )}
      />
      {props.children}
      <Footer />
    </>
  );
}

export default withStyles(styles)(Layout);
