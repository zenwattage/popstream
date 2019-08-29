import axios from 'axios';

const TWITCHAPIKEY = process.env.REACT_APP_API_KEY;

let api = axios.create({
    headers: {
        'Client-ID':TWITCHAPIKEY
    }
});

export default api;