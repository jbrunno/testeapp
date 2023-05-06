import axios from 'axios';
import { SERVER_URL } from '../../../config/environment';

export const api = axios.create({
    baseURL: SERVER_URL,
});