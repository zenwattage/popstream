import axios from 'axios';

let api = axios.create({
    headers: {
        'Client-ID': 'API KEY'
    }
});

export default api;