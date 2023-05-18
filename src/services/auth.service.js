import axios from "axios";

const API_URL = "https://job.kitactive.ru";


export function register(email, name, password) {
	return axios.post(API_URL + "/api/register", {
		email,
		name,
		password,
	});
}

export async function login(email, password) {
	const response = await axios
		.post(API_URL + "/api/login", { email, password })
	if (response.data.token) {
		localStorage.setItem("accessToken", response.data.token);
	}

	return response.data.token
}

export async function logout() {
	// вытаскиваем токен, чтобы заработал logout
	const accessToken = localStorage.getItem("accessToken")
	// и тут же удаляем его
	localStorage.removeItem("accessToken")

	// в заголовок Authorization передаем токен
	await axios({
		method: 'post',
		url: API_URL + '/api/logout',
		headers: { Authorization: `Bearer ${accessToken}` }
	})
}