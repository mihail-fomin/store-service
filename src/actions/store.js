import { GET_FILES, POST_FILES, GET_FILE, DELETE_FILE } from "./types";

export const setMessage = (message) => ({
	type: SET_MESSAGE,
	payload: message,
});

export const clearMessage = () => ({
	type: CLEAR_MESSAGE,
});