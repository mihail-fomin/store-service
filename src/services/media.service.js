import axios from 'axios';

const API_URL = "https://job.kitactive.ru";


export async function upload(formData) {
	const accessToken = localStorage.getItem("accessToken")
	const response = await axios
		.post(API_URL + '/api/media/upload', formData, {
			headers: {
				'Authorization': `Bearer ${accessToken}`,
				"Content-Type": 'multipart/form-data',
			}

		})
	console.log('response: ', response);
}