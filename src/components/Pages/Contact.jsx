import * as React from 'react';
import ContactSDK from '../../ContactSDK'
import { Button, Container, TextField, Grid, TextareaAutosize} from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'

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

const MyButton = styled(Button)({
    background: 'grey',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  });
const Contact = (props) => {
    const classes = useStyles();
    const [contact, setContact] = React.useState({})
    const [name, setName] = React.useState("name");
    const [email, setEmail] = React.useState("email");
    const [message, setMessage] = React.useState("what's good?");

    const newContactRequest = async () => {

        const contactSDK = new ContactSDK();
        const newContact = await contactSDK.createContact({name, email, message});
        setContact(newContact);
    }

    const addName = (event) => setName(event.target.value);
    const addEmail = (event) => setEmail(event.target.value);
    const addMessage = (event) => setMessage(event.target.value);

    React.useEffect(() => {
        console.log("hi");
    
      }, [])
    return (
        <div className="background" style={{backgroundImage: `url(${props.contactImage})`}}>   

            <Grid container spacing={4} align="center" alignItems="center" justify="center" direction="column" className={classes.container}> 
                    <Grid item><TextField className={classes.root} variant="filled" onChange={addName} value={name}  InputProps={{className: classes.input}}></TextField></Grid>
                    <Grid item><TextField className={classes.root} variant="filled" onChange={addEmail} value={email} InputProps={{className: classes.input}}></TextField></Grid>
                    <Grid item><TextField margin='normal' className={classes.root} variant="filled" onChange={addMessage} value={message} multiline rows="4" InputProps={{className: classes.input}}></TextField></Grid>
                    <Grid item><MyButton onClick={newContactRequest}>Submit</MyButton></Grid>
            </Grid>
        

        </div>
    )
}

export default Contact; 