import axios from 'axios';
import md5 from 'md5';
const PRIVATE_KEY = '';
const PUBLIC_KEY = '';

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
