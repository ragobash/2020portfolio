import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

import '../App.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  worksAppbar: {
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  worksToolbar: {
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  worksNavTab: {
    fontFamily: 'Exo, sans-serif',
    fontWeight: 'bold',
    margin: '10px',
    color: 'black',
    textDecorationLine: 'underline',   
  },
});

export default function WorksNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.worksAppbar}
        position='sticky'
        color= 'default'
      >
        <Toolbar className={classes.worksToolbar} variant='dense'>
        <Typography className={classes.worksNavTab} variant='body1'>ALL</Typography>
        <Typography className={classes.worksNavTab} variant='body1'>HTML</Typography>
        <Typography className={classes.worksNavTab} variant='body1'>CSS</Typography>
        <Typography className={classes.worksNavTab} variant='body1'>GRAPHQL</Typography>
        <Typography className={classes.worksNavTab} variant='body1'>JAVASCRIPT & JQUERY</Typography>
        <Typography className={classes.worksNavTab} variant='body1'>FIREBASE</Typography>
        <Typography className={classes.worksNavTab} variant='body1'>APIS</Typography>
        <Typography className={classes.worksNavTab} variant='body1'>NODE</Typography>
        <Typography className={classes.worksNavTab} variant='body1'>MYSQL/SEQUELIZE</Typography>
        </Toolbar>
        </AppBar>
        </div>
  );
}