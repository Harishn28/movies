import axios from 'axios';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 400000,
  });
  

instance.defaults.params = {
    'api_key': TMDB_API_KEY,
    'language': 'en-US',
};

export default instance;