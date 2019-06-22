import React from 'react';
import { Drawer, Divider, List, ListItem } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  paper: {
    minWidth: '13rem',
  },
  closeButton: {
    justifyContent: 'center',
  },
};

/**
 *
 * @param {boolean} isOpen - drawer open or close
 * @param {function} onClose - closing event handler
 * @param {*} children - children component
 */

function NavbarDrawer(props) {
  const { classes } = props;
  return (
    <Drawer
      classes={{ paper: classes.paper }}
      anchor="right"
      open={props.isOpen}
      onClose={props.onClose}
    >
      <Divider />
      <List>
        <ListItem
          // Close Button
          button
          className={classes.closeButton}
          onClick={props.onClose}
        >
          {<CloseIcon /> || 'X'}
        </ListItem>
        {props.children}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(NavbarDrawer);
