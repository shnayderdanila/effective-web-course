import axios from 'axios';
import { envs } from 'config/environments';

export const axiosInstanse = axios.create({
  baseURL: envs.baseApiUrl,
  params: {
    ts: envs.ts,
    apikey: envs.apiKey,
    hash: envs.hash
  }
});
