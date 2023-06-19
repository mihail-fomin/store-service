import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../const'
import axios from 'axios';

export const register = createAsyncThunk(
	'auth/register',
	async function ({ email, name, password }, { rejectWithValue }) {
		try {
			await fetch(API_URL + "/api/register", {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					email,
					name,
					password,
				})
			})
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const login = createAsyncThunk(
	'auth/login',
	async function ({ email, password }, { rejectWithValue }) {
		try {
			const response = await fetch(API_URL + "/api/login", {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				})
			})
			if (response.data.token) {
				// сохраняем токен в Local Storage
				localStorage.setItem("accessToken", response.data.token);
			}
			return response.data.token
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/logout',
	async function (_, { rejectWithValue }) {
		try {
			// вытаскиваем токен, чтобы передать в logout
			const accessToken = localStorage.getItem("accessToken")
			// и тут же удаляем его
			localStorage.removeItem("accessToken")
			// в заголовок Authorization передаем токен
			await fetch(API_URL + '/api/logout', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${accessToken}`
				},
			})
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)


const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		// register
		[register.pending]: (state) => {
			state.status = 'loading';
			state.error = null;
		},
		[register.fulfilled]: (state) => {
			state.status = 'resolved';
		},
		[register.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
		// login
		[login.pending]: (state) => {
			state.status = 'loading';
			state.error = null;
		},
		[login.fulfilled]: (state) => {
			state.status = 'resolved';
		},
		[login.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
		// logout
		[login.pending]: (state) => {
			state.status = 'loading';
			state.error = null;
		},
		[login.fulfilled]: (state) => {
			state.status = 'resolved';
		},
		[login.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
	}
})

export default authSlice.reducer