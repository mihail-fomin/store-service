

export default function authHeader() {
	const user = JSON.parse(localStorage.getItem('user'));

	// проверяем Local Storage на наличие 'user' и JWT - токена
	if (user && user.accessToken) {
		// при наличии возвращаем заголовок Authorization, со значением Bearer
		return { Authorization: 'Bearer ' + user.accessToken };
	} else {
		// иначе - возвращаем пустой объект
		return {};
	}
}