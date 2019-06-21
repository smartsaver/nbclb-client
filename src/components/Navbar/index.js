import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  AppBar,
  Typography,
  Toolbar,
  // Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  container: {
    maxWidth: theme.breakpoints.values.xl,
    margin: '0 auto',
    width: '100%',
  },
  menuEnd: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  },
  brand: {
    marginRight: '1.5rem',
  },
  burger: {
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
      marginLeft: 0,
    },
  },
});

/**
 *
 * @param {*} menuEnd - navbar right side.
 * @param {*} renderDrawer({ isOpen }) - render prop drawer component
 * @param {object} classes - styles injected
 */

class Navbar extends Component {
  state = {
    isDrawerOpen: false,
  };

  handleBurgerClick = () => {
    this.setState(currentState => ({
      isDrawerOpen: !currentState.isDrawerOpen,
    }));
  };

  render() {
    const { classes } = this.props;
    const { props, state } = this;
    const renderDrawer = !props.renderDrawer
      ? null
      : props.renderDrawer({ isOpen: state.isDrawerOpen });
    return (
      <>
        <AppBar position="static" color="inherit">
          <nav className={classes.container}>
            <Toolbar>
              <Typography className={classes.brand} variant="h6">
                Navbar
              </Typography>
              <div className={classes.menuEnd}>
                {props.menuEnd || null}
                {/* <Button color="inherit">Login</Button> */}
              </div>
              <IconButton
                className={classes.burger}
                edge="end"
                color="inherit"
                aria-label="Menu"
                onClick={this.handleBurgerClick}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </nav>
        </AppBar>
        {renderDrawer}
      </>
    );
  }
}

export default withStyles(styles)(Navbar);
