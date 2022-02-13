import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://client-btrchain.herokuapp.com',
  });


export default instance;