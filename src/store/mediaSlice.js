import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const API_URL = "https://job.kitactive.ru"
import axios from 'axios';

export const upload = createAsyncThunk(
	'media/upload',
	async function (formData, { rejectWithValue }) {
		try {
			// вытаскиваем токен для загрузки файлов
			const accessToken = localStorage.getItem("accessToken")
			const response = await axios
				.post(API_URL + '/api/media/upload', formData, {
					headers: {
						'Authorization': `Bearer ${accessToken}`,
						'Content-Type': 'multipart/form-data',
					}
				})
			// нужно ли что-либо возвращать???
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const getFiles = createAsyncThunk(
	'media/getFiles',
	async function (_, { rejectWithValue }) {
		try {
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
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const getFile = createAsyncThunk(
	'media/getFile',
	async function ({ mimeType, fileName, url }, { rejectWithValue }) {
		try {
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
					const a = document.createElement("a")
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
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const deleteFile = createAsyncThunk(
	'media/getFile',
	async function (id, { rejectWithValue }) {
		try {
			// вытаскиваем токен для загрузки файлов
			const accessToken = localStorage.getItem("accessToken")
			await axios.delete(API_URL + `/api/media/${id}`, {
				headers: {
					'Authorization': `Bearer ${accessToken}`,
				}
			})
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const mediaSlice = createSlice({
	name: 'media',
	initialState: {
		files: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[upload.pending]: (state, action) => {
			state.status = 'loading';
			state.error = null;
		},
		[upload.fulfilled]: (state, action) => {

			state.error = null;
		},
		[upload.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
	}
})

export default mediaSlice.reducer