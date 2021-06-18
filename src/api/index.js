import axios from 'axios';
import { API_KEY_V3 } from '../API_KEY';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 400000,
  });
  

instance.defaults.params = {
    'api_key': API_KEY_V3,
    'language': 'en-US',
};

export default instance;