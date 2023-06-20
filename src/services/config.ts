import {envs} from '@utils/constants/envs';
import axios from 'axios';

export const baseApi = axios.create({
  baseURL: envs.API_BASE_URL,
});
