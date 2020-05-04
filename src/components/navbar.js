import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Typography } from '@material-ui/core';

import '../App.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    alignSelf: 'flex-end',
  },
  navTab: {
    fontFamily: 'Exo, sans-serif',
    fontWeight: 'bold',
    margin: '10px',
    color: 'black',
    textDecorationLine: 'underline',   
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position='sticky'
        color= 'default'
      >
        <Toolbar className={classes.toolbar}>
        <AnchorLink href='#landingPage'><Typography className={classes.navTab} variant='body1'>home</Typography></AnchorLink>
        <AnchorLink href='#about'><Typography className={classes.navTab} variant='body1'>about</Typography></AnchorLink>
        <AnchorLink href='#resume'><Typography className={classes.navTab} variant='body1'>resume</Typography></AnchorLink>
        <AnchorLink href='#works'><Typography className={classes.navTab} variant='body1'>works</Typography></AnchorLink>
        <AnchorLink href='#contact'><Typography className={classes.navTab} variant='body1'>contact</Typography></AnchorLink>
        </Toolbar>
        </AppBar>
        </div>
  );
}
