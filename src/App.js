import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import LazyHero from 'react-lazy-hero';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import Navbar from './components/navbar'

import './App.css';

const useStyles = makeStyles(() => ({
  root: {
//
  },
  landingPageInfo: {
    color: 'white',
  },
  landingPageInfoBold: {
    fontFamily: 'Vollkorn SC, serif',
    fontWeight: 'bold'
  },
  landingPageInfoYellow: {
    fontFamily: 'Vollkorn SC, serif',
    fontWeight: 'bold',
  },
  landingPageInfoParagraph: {
    fontFamily: 'Exo, sans-serif',
    fontWeight: 'bold'
  },
  icons: {
    padding: '15px',
  },
  about: {
    minHeight: '100vh',
    
  }
}))


// Start Main Page Code
function App() {
  const classes= useStyles();

  return (
    <div className='App'>
      <div className='landingPage'>
      <LazyHero
        color='#000000'
        imageSrc='https://picsum.photos/id/180/2400/1600.jpg?grayscale&blur=10'
        minHeight='100vh'
        opacity='0.7'
        parallaxOffset='100'
        >
        <div className={classes.landingPageInfo}>
            <Typography variant='h3' className={classes.landingPageInfoBold}>
              Hi there. My name is Ryan Harris. I am a
            </Typography>
            <Typography variant='h1' className={classes.landingPageInfoBold} style={{color: 'yellow'}}>
              FULL STACK</Typography>
            <Typography variant='h1' className={classes.landingPageInfoBold}>
              DEVELOPER
            </Typography>
            <Typography variant='body1' className={classes.landingPageInfoParagraph}>
            Artistically-trained web developer with innovative and creative
            approaches to problem solving.
            </Typography>
            <br />
            <Typography variant='body1' className={classes.landingPageInfoParagraph}>
            Passionate about UI/UX with a forward-thinking consideration for the
            end user.
            </Typography>
            <br />
            <Typography variant='body1' className={classes.landingPageInfoParagraph}>
            Experienced in direct sales, relationship-building, listening, and
            self-awareness.
            </Typography>
            <div className={classes.icons}>
            <i class='fab fa-linkedin fa-4x' style={{padding: '5px'}}></i>
            <i class='fab fa-github-square fa-4x' style={{padding: '5px'}}></i>
            </div>
          </div>
      </LazyHero>
      </div>
      <div className={classes.about}>
        <Navbar />

      </div>
    </div>
  );
}

export default App;
