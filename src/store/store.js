import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./mediaReducer";


export const store = configureStore({
	reducer: {
		media: mediaReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(localStorageMiddleware)
});