import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import HomeImage from '../../images/testJNHOME.png'
import AboutImage from '../../images/testJNABOUT.png'
import ContactImage from '../../images/testJNCHAT.png'

const useStyles = makeStyles((theme) =>
  createStyles({
    navbar: {
        backgroundColor: "grey"
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const NavbarMatUI = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Router>
            <AppBar className={classes.navbar} position="static">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        Just Neighbors
                    </Typography>
                    <Button color="inherit"><Link to='/'>Home</Link></Button>
                    <Button color="inherit"><Link to='/about'>About</Link></Button>
                    <Button color="inherit"><Link to='/contact'>Contact</Link></Button>
                </Toolbar>
            </AppBar>
        <Switch>
        <Route exact path="/">
            <Home homeImage={HomeImage}></Home>
        </Route>
        <Route path="/about">
            <About aboutImage={AboutImage}></About>
        </Route>
        <Route path="/contact">
            <Contact contactImage={ContactImage}></Contact>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default NavbarMatUI;