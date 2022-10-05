import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://backend-btrchain.glitch.me/',
  });


export default instance;
