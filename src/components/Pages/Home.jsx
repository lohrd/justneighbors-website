import * as React from 'react';
import { Button, Container, TextField, Grid, TextareaAutosize} from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'
import FBImage from '../../images/FB.png'
import INImage from '../../images/insta.png'
import SPImage from '../../images/spotify.png'
import TWImage from '../../images/twitter.png'
import '../../styles.css';

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "100vh"
      },
    root: {
        display: 'flex',
        height: '41px',
        width: '392px',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
     },
     input: {
        color: 'white',
        backgroundColor: 'grey',
        opacity: '0.75',
        width: '392px'
     }
  }));

const Home = (props) => {
    const classes = useStyles();
    return (
        <div className="background" style={{backgroundImage: `url(${props.homeImage})`}} >
            <Grid container spacing={3} align="center" alignItems="center" justify="center" direction="row" className={classes.container}>
                <Grid item>
                    <a href="https://www.facebook.com/JustNeighborsBand/">
                        <img src={FBImage}></img>
                    </a>
                </Grid>
                <Grid item>
                    <a href="https://www.instagram.com/justneighbors/">
                        <img src={INImage}></img>
                    </a>
                </Grid>                
                <Grid item>
                    <a href="https://twitter.com/jneighborsband/">
                        <img src={TWImage}></img>
                    </a>
                </Grid>                
                <Grid item>
                    <a href="https://open.spotify.com/artist/06eexGweIG9BWxxUVSttxR?si=dvY_0xuUSxq5zBqdWMAEJA">
                        <img src={SPImage}></img>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;