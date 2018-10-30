import axios from 'axios';
import API from '@/constants/api';

const instance = axios.create({
  baseURL: API.BASE
});

export default instance;
