import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Navbar from '../../components/Navbar';

storiesOf('Navbar', module).add('Empty Navbar', () => <Navbar />);
