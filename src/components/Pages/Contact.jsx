import * as React from 'react';
import ContactSDK from '../../ContactSDK'


const Contact = (props) => {
    const [contact, setContact] = React.useState({})
    const [name, setName] = React.useState("name");
    const [email, setEmail] = React.useState("email");
    const [message, setMessage] = React.useState("what's good?");

    const newContactRequest = async () => {
        const contactSDK = new ContactSDK();
        const newContact = await contactSDK.createContact({name, email, message})
        setContact(newContact)
    }

    const addName = (event) => setName(event.target.value);
    const addEmail = (event) => setEmail(event.target.value);
    const addMessage = (event) => setMessage(event.target.value);

    React.useEffect(() => {
        console.log("hi");
      }, [])
    return (
        <div className="background" style={{backgroundImage: `url(${props.contactImage})`}}>            
            <input onChange={addName} value={name}></input>
            <input onChange={addEmail} value={email}></input>
            <input onChange={addMessage} value={message}></input>
            <button onClick={newContactRequest}></button>
        </div>
    )
}

export default Contact; 