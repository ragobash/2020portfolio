import { Button,
         Grid,
         Paper,
         Typography } from '@material-ui/core';
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
  landingPageInfoParagraph: {
    fontFamily: 'Exo, sans-serif',
    fontWeight: 'bold'
  },
  icons: {
    padding: '15px',
  },
  newSection: {
    minHeight: '100vh',
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
    padding: '15px',
  },
  aboutInfoTitle: {
    fontFamily: 'Vollkorn SC, serif',
    fontWeight: 'bold',
    padding: '15px',
    textAlign: 'left'

  },
  aboutInfo: {
    fontFamily: 'Exo, sans-serif',
    margin: '15px',
    textAlign: 'left'
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
            <a href='https://www.linkedin.com/in/ryanharrishtx/' target='_blank'><i class='fab fa-linkedin fa-4x' style={{padding: '5px', color: 'white'}}></i></a>
            <a href='https://github.com/ragobash' target='_blank'><i class='fab fa-github-square fa-4x' style={{padding: '5px', color: 'white'}}></i></a>
            </div>
            <div class="scroll-downs">
              <div class="mousey">
               <div class="scroller"></div>
              </div>
            </div>
          </div>
      </LazyHero>
      </div>
{/* ------------------------------------------------------------------------------------------------ */}
      {/* ABOUT SECTION */}
      <div className={classes.newSection}>
        <Navbar />
          <Typography className={classes.title} variant="h1">
            ABOUT ME
          </Typography>
          <Grid
            container
            direction="row"
            justify='center'
            alignItems='center'
          >
            <Grid item lg={1}></Grid>
            <Grid item xs={12} lg={6}>
              <Paper elevation={0} style={{margin: '5px 0px 25px 15px'}}>
                <Typography className={classes.aboutInfoTitle} variant="h4" style={{justify: 'left'}}>Objective</Typography>
                <Typography className={classes.aboutInfo} variant="body1">I am an enthusiastic entrepreneur and developer eager to turn my passion for web design into a career at an awesome company. <br />
                As a creative Full Stack Developer and Designer, I am adept at working with all aspects of technology and information systems, with expertise in full project lifecycle development with a focus on delivering business solutions to technology needs. I am a detail-oriented web developer with extensive experience in design, bug-fixing and customer service, and troubleshoot highly technical issues with ease and patience.</Typography>
                </Paper>
                <Paper elevation={0} style={{margin: '5px 0px 25px 15px'}}>
                <Typography className={classes.aboutInfoTitle} variant="h4">What I Do</Typography>
                <Typography className={classes.aboutInfo} variant="body1">Work closely with clients to create vision, conceive designs, and consistently meet deadlines and requirements.
                <br />
                Conceptualize, plan, and execute original designs for a wide range of website properties, including website responsiveness.
                <br />
                Create online marketing strategies, SEO, and social media engagement to dramatically increase page views and attract new customers.
                </Typography>
                <ul style={{display: 'flex'}}>
                  <li style={{paddingRight:'5px'}}><i class="fas fa-check fa-sm" style={{color: 'green', padding: '7px'}}></i>`Website/App Design & Development`</li>
                  <li style={{paddingRight:'5px'}}><i class="fas fa-check fa-sm" style={{color: 'green', padding: '7px'}}></i>UI/UX Design</li>
                  <li style={{paddingRight:'5px'}}><i class="fas fa-check fa-sm" style={{color: 'green', padding: '7px'}}></i>Copywriting</li>
                  <li style={{paddingRight:'5px'}}><i class="fas fa-check fa-sm" style={{color: 'green', padding: '7px'}}></i>Photography</li>
                  <li style={{paddingRight:'5px'}}><i class="fas fa-check fa-sm" style={{color: 'green', padding: '7px'}}></i>Design</li>
                  <li style={{paddingRight:'5px'}}><i class="fas fa-check fa-sm" style={{color: 'green', padding: '7px'}}></i>Branding</li>
                </ul>
                </Paper>
                <Paper elevation={0}>
                  <Button color='secondary' href='mailto:ragobash@gmail.com' size='large' target='_blank' variant='contained' style={{margin: '10px', display: 'block'}}>
                  <i class="fas fa-paper-plane" style={{paddingRight: '3px'}}></i> Send me a message!
                  </Button>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
                <img src={require('./Ryan.png')} alt='Ryan Harris'/>
                <Paper elevation={0}>
                  <Typography variant="h5">
                    Ryan Harris
                  </Typography>
                  <Typography>
                    Houston, Texas
                  </Typography>
                  <Typography>
                    (713) 882-2363
                  </Typography>
                </Paper>
            </Grid>
            <Grid item={1}></Grid>
            </Grid>
            <hr style={{margin:'25px 0px 25px 0px'}}></hr>
      </div>
{/* ------------------------------------------------------------------------------------------------ */}
    {/* ABOUT SECTION */}
    <div className={classes.newSection}>
    <Typography className={classes.title} variant="h1">
            RESUME
          </Typography>
    </div>
    </div>
  );
}

export default App;
