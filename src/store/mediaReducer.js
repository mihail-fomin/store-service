import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { login } from '../services/auth.service'
const API_URL = "https://job.kitactive.ru";
import axios from 'axios';

const initialState = {
	files: [],
	error: '',
	filesQuanitity: 0,
}

export const mediaRequestAsync = createAsyncThunk(
	'media/fetch',
	axios.post(API_URL + '/api/media/upload', formData, {
		headers: {
			'Authorization': `Bearer ${accessToken}`,
			'Content-Type': 'multipart/form-data',
		}
	})
)


const signInSlice = createSlice({
	name: 'media',
	initialState,
	reducers: {

	},
	extraReducers: builder => {
		builder
			.addCase(submitForm.pending, (state) => {
				state.status = 'loading'
				state.response = null
				state.error = null
			})
			.addCase(submitForm.fulfilled, (state, action) => {
				state.status = 'success'
				state.response = action.payload
			})
			.addCase(submitForm.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.payload
			})
	}
})


export const { updateFormValue, setError, clearError, changeTouch } = formSlice.actions
export default signInSlice.reducer