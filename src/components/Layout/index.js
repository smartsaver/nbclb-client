import React from 'react';
import navbarLogo from '../../images/esic-logo.png';
import Navbar from '../Navbar';
import NavbarDrawer from '../Navbar/NavbarDrawer';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button } from '@material-ui/core';

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
            <a href="./#apply">
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Apply
              </Button>
            </a>
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
