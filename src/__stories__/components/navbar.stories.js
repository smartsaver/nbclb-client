import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Navbar from '../../components/Navbar';

storiesOf('Navbar', module)
  .add('Empty Navbar', () => <Navbar />)
  .add('Navbar with Drawer', () => (
    <Navbar
      menuEnd={<h1>Hello</h1>}
      renderDrawer={({ isOpen }) => <h2>The drawer is {`${isOpen}`}</h2>}
    />
  ));
