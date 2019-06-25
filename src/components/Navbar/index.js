import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  AppBar,
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
 * @param {*} brand - navbar brand to the left side
 * @param {*} menuEnd - navbar right side.
 * @param {*} renderDrawer({ isOpen, closeDrawer }) - render prop drawer component
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

  closeDrawer = () => {
    this.setState({ isDrawerOpen: false });
  };

  renderDrawer = () => {
    const { props, state } = this;
    return !props.renderDrawer
      ? null
      : props.renderDrawer({
          isOpen: state.isDrawerOpen,
          closeDrawer: this.closeDrawer,
        });
  };

  render() {
    const { classes } = this.props;
    const { props } = this;
    return (
      <>
        <AppBar position="sticky" color="inherit">
          <nav className={classes.container}>
            <Toolbar>
              {props.brand}
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
        {this.renderDrawer()}
      </>
    );
  }
}

export default withStyles(styles)(Navbar);
