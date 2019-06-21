import React from 'react';
import { Drawer } from '@material-ui/core';

/**
 *
 * @param {boolean} isOpen - drawer open or close
 * @param {function} onClose - closing event handler
 * @param {*} children - children component
 */

function NavbarDrawer(props) {
  return (
    <Drawer anchor="right" open={props.isOpen} onClose={props.onClose}>
      {props.children}
    </Drawer>
  );
}

export default NavbarDrawer;
