import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-shop-9d650.firebaseio.com/'
});

export default instance;
