import axios from 'axios';
const API_URL = "https://job.kitactive.ru";


export async function upload(formData) {
	// вытаскиваем токен для загрузки файлов
	const accessToken = localStorage.getItem("accessToken")
	const response = await axios
		.post(API_URL + '/api/media/upload', formData, {
			headers: {
				'Authorization': `Bearer ${accessToken}`,
				'Content-Type': 'multipart/form-data',
			}

		})
	console.log('response upload: ', response);
}

export async function getFiles() {
	// вытаскиваем токен для загрузки файлов
	const accessToken = localStorage.getItem("accessToken")
	// запрашиваем список файлов, используя токен
	const response = await axios
		.get(API_URL + '/api/media', {
			headers: {
				'Authorization': `Bearer ${accessToken}`,
			}
		})
	// console.log('response getFiles: ', response.data.files);
	// и возвращаем массив
	return response.data.files
}

export async function getFile(id) {
	// вытаскиваем токен для загрузки файлов
	const accessToken = localStorage.getItem("accessToken")
	// запрашиваем файл, используя токен
	const response = await axios
		.get(API_URL + `/api/media/${id}`, {
			headers: {
				'Authorization': `Bearer ${accessToken}`,
			}
		})
	console.log('response getFile: ', response);


	window.open(response)
}
