import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mesquite-pine-technosaurus.glitch.me',
  });


export default instance;
