import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Navbar from '../../components/Navbar';
import NavbarDrawer from '../../components/Navbar/NavbarDrawer';

storiesOf('Navbar', module)
  .add('Empty Navbar', () => <Navbar />)
  .add('Navbar with Drawer', () => (
    <Navbar
      menuEnd={<h1>Hello</h1>}
      renderDrawer={({ isOpen, closeDrawer }) => (
        <NavbarDrawer isOpen={isOpen} onClose={closeDrawer}>
          Hello Drawer
        </NavbarDrawer>
      )}
    />
  ))
  .add('NavbarDrawer with list', () => (
    <NavbarDrawer isOpen={true}>Navbar Drawer</NavbarDrawer>
  ));
