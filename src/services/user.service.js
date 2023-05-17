import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://job.kitactive.ru";

export function getPublicCountent() {
	return axios.get(API_URL + 'all')
}

export function getUserBoard() {
	return axios.get(API_URL + 'user', { headers: authHeader() });
}
