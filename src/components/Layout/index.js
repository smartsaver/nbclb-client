import React from 'react';
import navbarLogo from '../../images/esic-logo.png';
import Navbar from '../Navbar';
import NavbarDrawer from '../Navbar/NavbarDrawer';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Typography } from '@material-ui/core';

const styles = {
  navbarLogo: {
    maxWidth: '10rem',
  },
  button: {
    backgroundColor: '#0069c0',
    '&:hover': {
      backgroundColor: '#005cb2',
    },
  },
  navbarLink: {
    textDecoration: 'none',
  },
  localeContainer: {
    padding: '1rem',
    // marginLeft: '1rem',
    '& > a': {
      textDecoration: 'none',
      fontWeight: '300',
      color: '#616161',
      margin: '0 .3rem',
    },
    '& > a:hover': {
      textDecoration: 'underline',
    },
  },
};

function Layout(props) {
  const { classes } = props;
  return (
    <>
      <Navbar
        brand={
          <img className={classes.navbarLogo} src={navbarLogo} alt="ESIC" />
        }
        menuEnd={
          <>
            <a className={classes.navbarLink} href="./#apply">
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Apply
              </Button>
            </a>
            <Typography
              className={classes.localeContainer}
              variant="body1"
              component="div"
            >
              <a href="./#en">en</a>
              <span> | </span>
              <a href="./#fr">fr</a>
            </Typography>
          </>
        }
        renderDrawer={({ isOpen, closeDrawer }) => (
          <NavbarDrawer isOpen={isOpen} onClose={closeDrawer}>
            Hello Drawer
          </NavbarDrawer>
        )}
      />
      {props.children}
    </>
  );
}

export default withStyles(styles)(Layout);
