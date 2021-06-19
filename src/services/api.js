import axios from 'axios';
import md5 from 'md5';
const PRIVATE_KEY = 'e773b5e727aa4ae930fed3bcc8eb6753692f2240';
const PUBLIC_KEY = '335482a5ab9180863c1b9398c3616015';

const time = Number(new Date());

const hash = md5(time + PRIVATE_KEY + PUBLIC_KEY);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts: time,
    apikey: PUBLIC_KEY,
    hash: hash,
  },
});

export default api;
