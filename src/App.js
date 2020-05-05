import { Button,
         Container,
         Grid,
         Paper,
         Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import LazyHero from 'react-lazy-hero';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import Navbar from './components/navbar'
import WorksNavbar from './components/worksNavbar'

import './App.css';

const useStyles = makeStyles(() => ({
  root: {
//
  },
  gridItem: {
    boxShadow: '-5px 5px 10px grey'
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
    fontFamily: 'Vollkorn SC, serif',
    fontWeight: 'bold',
    padding: '15px',
  },
  titleWhite: {
    fontFamily: 'Vollkorn SC, serif',
    fontWeight: 'bold',
    padding: '15px',
    color: 'white',
  },
  aboutInfoTitle: {
    fontFamily: 'Exo, sans-serif',
    fontWeight: 'bold',
    padding: '15px',
    textAlign: 'left'
  },
  aboutInfo: {
    fontFamily: 'Exo, sans-serif',
    margin: '15px',
    textAlign: 'left'
  },
  timelineTitleLeft: {
    fontFamily: 'Vollkorn SC, serif',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  timelineSubtitleLeft: {
    fontFamily: 'Exo, sans-serif',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  timelineInfoLeft: {
    fontFamily: 'Exo, sans-serif',
    textAlign: 'right',
  },
  timelineTitleRight: {
    fontFamily: 'Vollkorn SC, serif',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  timelineSubtitleRight: {
    fontFamily: 'Exo, sans-serif',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  timelineInfoRight: {
    fontFamily: 'Exo, sans-serif',
    textAlign: 'left',
  },
}))


// Start Main Page Code
function App() {
  const classes= useStyles();

  return (
    <div className='App'>
{/* ------------------------------------------------------------------------------------------------ */}
      {/* LANDING PAGE */}
      <div className='landingPage' id='landingPage'>
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
            <a href='https://www.linkedin.com/in/ryanharrishtx/' target='_blank' rel='noopener noreferrer'><i class='fab fa-linkedin fa-4x' style={{padding: '5px', color: 'white'}}></i></a>
            <a href='https://github.com/ragobash' target='_blank' rel='noopener noreferrer'><i class='fab fa-github-square fa-4x' style={{padding: '5px', color: 'white'}}></i></a>
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
      <div className={classes.newSection} id='about'>
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
                <Typography className={classes.aboutInfoTitle} variant="h4" style={{justify: 'left'}}>OBJECTIVE</Typography>
                <Typography className={classes.aboutInfo} variant="body1">I am an enthusiastic entrepreneur and developer eager to turn my passion for web design into a career at an awesome company. <br />
                As a creative Full Stack Developer and Designer, I am adept at working with all aspects of technology and information systems, with expertise in full project lifecycle development with a focus on delivering business solutions to technology needs. I am a detail-oriented web developer with extensive experience in design, bug-fixing and customer service, and troubleshoot highly technical issues with ease and patience.</Typography>
                </Paper>
                <Paper elevation={0} style={{margin: '5px 0px 25px 15px'}}>
                <Typography className={classes.aboutInfoTitle} variant="h4">WHAT I DO</Typography>
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
                  <Button color='secondary' href='mailto:ragobash@gmail.com' size='large' target='_blank' variant='contained' style={{margin: '10px', padding: '25px'}}>
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
      </div>

{/* ------------------------------------------------------------------------------------------------ */}
      {/* RESUME SECTION */}
    <div className={classes.newSection} id='resume' style={{backgroundColor: '#222222'}}>
      <Typography className={classes.titleWhite} variant="h1">
        RESUME
      </Typography>
    <div className="timeline-wrap">
      <ul className="timeline timeline--first">
          <li className="era">
            <Typography variant='h4' className="era__title">Education</Typography>
          </li>
          <li className="entry entry--left">
            <div className="entry__content">
                <Typography variant='h4' className={classes.timelineTitleLeft}>CERTIFICATE</Typography>
                <Typography variant='subtitle1' className={classes.timelineSubtitleLeft}>Full Stack Developer Certificate, University of Texas at Austin, Houston, TX</Typography>
                <Typography variant='subtitle2' className={classes.timelineSubtitleLeft}>2019</Typography>
                <Typography variant='body2' className={classes.timelineInfoLeft}>24 week course in Web Development which included HTML, Git, CSS, Javascript, jQuery, APIs, AJAX, JSON, Firebase, Node JS, MYSQL, Heroku, Express, Handlebars, Sequelize ORM, MongoDB, MongoJS, Mongoose, ES6, React JS, JSX, and MERN.</Typography>
            </div>
          </li>
          <li className="entry entry--right">
          <div className="entry__content">
                <Typography variant='h4' className={classes.timelineTitleRight}>BACHELOR OF FINE ARTS (BFA) DEGREE</Typography>
                <Typography variant='subtitle1' className={classes.timelineSubtitleRight}>Contemporary Sculpture & Printmaking, University of Oklahoma, Norman, OK</Typography>
                <Typography variant='subtitle2' className={classes.timelineSubtitleRight}>2009-2014</Typography>
                <Typography variant='body2' className={classes.timelineInfoRight}>In my time at the University of Oklahoma I won the Oscar Jacobson Award, the T.G. Mays Purchase Award, as well as written about in various newspapers chronicalling my artistic career and works.</Typography>
            </div>
          </li>
      </ul>
    </div>
<div className="timeline-wrap">
   <ul className="timeline">
      <li className="era">
            <Typography variant='h4' className="era__title">Experience</Typography>
      </li>
      <li className="entry entry--left">
      <div className="entry__content">
                <Typography variant='h4' className={classes.timelineTitleLeft}>CHIRP</Typography>
                <Typography variant='subtitle1' className={classes.timelineSubtitleLeft}>Junior React Developer</Typography>
                <Typography variant='subtitle2' className={classes.timelineSubtitleLeft}>March 2020 - April 2020</Typography>
                <Typography variant='body2' className={classes.timelineInfoLeft}>I was responsible for resolving tickets pertaining to error handling using Sentry, adding Nice-To-Have functionality to their Admin Panel and Access App, and helping to elevate the user experience to a competitive level in the smart lock/home access software space.</Typography>
            </div>
      </li>
      <li className="entry entry--right">
      <div className="entry__content">
                <Typography variant='h4' className={classes.timelineTitleRight}>WAVE ELECTRONICS</Typography>
                <Typography variant='subtitle1' className={classes.timelineSubtitleRight}>Social Media Marketing Manager</Typography>
                <Typography variant='subtitle2' className={classes.timelineSubtitleRight}>May 2019 - February 2020</Typography>
                <Typography variant='body2' className={classes.timelineInfoRight}>I was responsible for planning, implementing, managing and monitoring the company's Social Media strategy in order to increase brand awareness, improve Marketing efforts and increase sales.</Typography>
            </div>
      </li>
      <li className="entry entry--left">
      <div className="entry__content">
                <Typography variant='h4' className={classes.timelineTitleLeft}>RDA PROMART</Typography>
                <Typography variant='subtitle1' className={classes.timelineSubtitleLeft}>Direct Sales Consultant</Typography>
                <Typography variant='subtitle2' className={classes.timelineSubtitleLeft}>August 2018-May 2019</Typography>
                <Typography variant='body2' className={classes.timelineInfoLeft}>I was responsible for creating customer awareness of the companies' products and services. I was also responsible for presenting the companies' products and services to potential customers and closing sales.</Typography>
            </div>
      </li>
      <li className="entry entry--right">
      <div className="entry__content">
                <Typography variant='h4' className={classes.timelineTitleRight}>MANOCOBLUE</Typography>
                <Typography variant='subtitle1' className={classes.timelineSubtitleRight}>Social Media Marketing Manager</Typography>
                <Typography variant='subtitle1' className={classes.timelineSubtitleRight}>May 2017-August 2018</Typography>
                <Typography variant='body2' className={classes.timelineInfoRight}>I was responsible for planning, implementing, managing and monitoring the company's Social Media strategy in order to increase brand awareness, improve Marketing efforts and increase sales.</Typography>
            </div>
      </li>
   </ul>
</div>
    </div>
{/* ------------------------------------------------------------------------------------------------ */}
      {/* WORKS SECTION */}
    <div className={classes.newSection} id='works'>
    <Typography className={classes.title} variant="h1">
      WORKS
    </Typography>
    <WorksNavbar />
    <div className={classes.worksGrid} maxWidth='xl'>
      <Container className={classes.gridContainer}>
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs>
          <img className={classes.gridItem} src={require('./qwiki.gif')} alt='Qwiki'/>          
          </Grid>
          <Grid item xs>
          <img className={classes.gridItem} src={require('./starwars.gif')} alt='Star Wars - Express'/>
          </Grid>
          <Grid item xs>
          <img className={classes.gridItem} src={require('./scraper.gif')} alt='Scraper'/>
          </Grid>
          <Grid item xs>
          <img className={classes.gridItem} src={require('./googlebooks.gif')} alt='Google Books'/>
          </Grid>
          <Grid item xs>
          <img className={classes.gridItem} src={require('./palindrome.gif')} alt='Palindrome'/>
          </Grid>
          <Grid item xs>
          <img className={classes.gridItem} src={require('./giphy.gif')} alt='Giphy'/>
          </Grid>
          <Grid item xs>
          <img className={classes.gridItem} src={require('./pokemon.gif')} alt='Pokemon'/>
          </Grid>
          <Grid item xs>
          <img className={classes.gridItem} src={require('./trivia.gif')} alt='Trivia'/>
          </Grid>
          <Grid item xs>
          <img className={classes.gridItem} src={require('./colors.gif')} alt='Colors'/>
          </Grid>
          <Grid item xs>
          <img className={classes.gridItem} src={require('./clickygame.gif')} alt='Clicky Game'/>
          </Grid>
        </Grid>
      </Container>
    </div>
    </div>
{/* ------------------------------------------------------------------------------------------------ */}
      {/* CONTACT SECTION */}
      <div id='contact' style={{backgroundColor: '#222222', minHeight: '50vh'}}>
        <Typography className={classes.titleWhite} variant="h1">
          GET IN TOUCH
        </Typography>
        <Button color='secondary' href='mailto:ragobash@gmail.com' size='large' target='_blank' variant='contained' style={{margin: '10px', padding: '25px'}}>
          <i class="fas fa-paper-plane" style={{paddingRight: '3px'}}></i> Send me a message!
        </Button>
        <br />
        <div style={{paddingTop: '10%'}}>
        <Typography variant='caption' style={{color: 'white'}}>
          © Ryan Harris 2020. All rights reserved.
        </Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
