// import * as axios from 'axios';
const axios = require('axios');
import "regenerator-runtime/runtime.js"

export default class ContactSdk { 
    async createContact(contact) {
        const response =  await axios.post(`http://localhost:3000/contact`, contact);
        return response.data;
    }
}

