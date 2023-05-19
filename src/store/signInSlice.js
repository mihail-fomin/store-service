import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { login } from '../services/auth.service'

const initialState = {
	email: '',
	password: '',
	error: null,
	errors: {},
	touch: false,
}

export const submitForm = createAsyncThunk(
	'form/submit',

)

// export async function login(email, password) {
// 	const response = await axios
// 		.post(API_URL + "/api/login", { email, password })
// 	if (response.data.token) {
// 		localStorage.setItem("accessToken", response.data.token);
// 	}

// 	return response.data.token
// }

const signInSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		updateFormValue: (state, action) => {
			state[action.payload.field] = action.payload.value;
		},
		setError: (state, action) => ({
			...state,
			errors: action.payload,
		}),
		clearError: state => {
			state.error = {}
		},
		changeTouch: state => {
			state.touch = true
		}
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