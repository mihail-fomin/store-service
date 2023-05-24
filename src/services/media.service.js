import axios from 'axios';
const API_URL = "https://job.kitactive.ru";


export async function upload(formData) {
	// вытаскиваем токен для загрузки файлов
	const accessToken = localStorage.getItem("accessToken")
	await axios.post(API_URL + '/api/media/upload', formData, {
		headers: {
			'Authorization': `Bearer ${accessToken}`,
			'Content-Type': 'multipart/form-data',
		}
	})
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
	// и возвращаем массив
	return response.data.files
}

export async function getFile({ mimeType, fileName, url }) {
	// вытаскиваем токен для загрузки файлов
	const accessToken = localStorage.getItem("accessToken")
	// запрашиваем файл, используя токен
	await axios.get(url, {
		headers: {
			'Authorization': `Bearer ${accessToken}`,
		}
	})

	// создаем xhr запрос
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	// используем blob для корректной загрузки изображений
	xhr.responseType = "blob";
	xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`)
	xhr.onload = function () {
		if (this.status === 200) {
			// создаем инстанс blob, передаем ответ
			const blob = new Blob([this.response], { type: mimeType })
			const blobUrl = URL.createObjectURL(blob)
			const a = document.createElement("a");
			a.href = blobUrl
			a.download = fileName
			// помещаем в body
			document.body.appendChild(a)
			a.click()
			// очищаем память
			window.URL.revokeObjectURL(blobUrl)
		}
	};
	// запускаем запрос
	xhr.send();
}

export async function deleteFile(id) {
	// вытаскиваем токен для загрузки файлов
	const accessToken = localStorage.getItem("accessToken")
	await axios.delete(API_URL + `/api/media/${id}`, {
		headers: {
			'Authorization': `Bearer ${accessToken}`,
		}
	})
}