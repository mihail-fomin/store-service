import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { upload, getFiles, getFile, deleteFile } from "../services/media.service";

const initialState = {
	files: [],
	error: '',
}

export const uploadFileCreator = createAsyncThunk(
	'media/fetch',
	(formData) => upload(formData)
)

export const getFilesCreator = createAsyncThunk(
	'media/fetch',
	() => getFiles()
)

export const getFileCreator = createAsyncThunk(
	'media/fetch',
	({ mimeType, fileName, url }) => getFile({ mimeType, fileName, url })
)

export const deleteFileCreator = createAsyncThunk(
	'media/fetch',
	(id) => deleteFile(id)
)

const signInSlice = createSlice({
	name: 'media',
	initialState,
	reducers: {

	},
})


export const { } = formSlice.actions
export default signInSlice.reducer