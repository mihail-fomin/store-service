import axios from "axios";
const API_URL = "https://job.kitactive.ru"

// export async function register({ email, name, password }) {
// 	// делаем POST-запрос для регистрации
// 	const response = await axios.post(API_URL + "/api/register", {
// 		email,
// 		name,
// 		password,
// 	});
// 	if (response.status === 200) {
// 		return true
// 	}
// }

export async function login({ email, password }) {
	// делаем POST-запрос для входа
	const response = await axios
		.post(API_URL + "/api/login", { email, password })
	if (response.data.token) {
		// и сохраняем токен в Local Storage
		localStorage.setItem("accessToken", response.data.token);
	}
	return response.data.token
}

export async function logout() {
	// вытаскиваем токен, чтобы передать в logout
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