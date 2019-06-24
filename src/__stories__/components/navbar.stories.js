import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Navbar from '../../components/Navbar';
import NavbarDrawer from '../../components/Navbar/NavbarDrawer';
import theme from '../../theme/muiThemeConfig';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

storiesOf('Navbar', module)
  .add('Empty Navbar', () => (
    <MuiThemeProvider theme={theme}>
      <Navbar brand={<Typography variant="h6">Navbar</Typography>} />
    </MuiThemeProvider>
  ))
  .add('Navbar with Drawer', () => (
    <MuiThemeProvider theme={theme}>
      <Navbar
        brand={<Typography variant="h6">Navbar</Typography>}
        menuEnd={<h1>Hello</h1>}
        renderDrawer={({ isOpen, closeDrawer }) => (
          <NavbarDrawer isOpen={isOpen} onClose={closeDrawer}>
            Hello Drawer
          </NavbarDrawer>
        )}
      />
    </MuiThemeProvider>
  ))
  .add('NavbarDrawer with list', () => (
    <MuiThemeProvider theme={theme}>
      <NavbarDrawer isOpen={true}>Navbar Drawer</NavbarDrawer>
    </MuiThemeProvider>
  ));
