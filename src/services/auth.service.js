import axios from "axios";

const API_URL = "https://job.kitactive.ru";

class AuthService {
	register(name, email, password) {
		return axios.post(API_URL + "/api/register", {
			name,
			email,
			password,
		});
	}

	login(email, password) {
		return axios
			.post(API_URL + "/api/login", { email, password })
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}

				return response.data;
			});
	}

	logout() {
		localStorage.removeItem("user");

		// return axios
		// 	.post(API_URL + "/api/logout", {})
		// 	.then((response) => {
		// 		if (response.data.accessToken) {
		// 			localStorage.setItem("user", JSON.stringify(response.data));
		// 		}

		// 		return response.data;
		// 	});
	}
}

export default new AuthService();