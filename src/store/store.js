import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
// import mediaSlice from "./mediaSlice"

const rootReducer = combineReducers({
	auth: authSlice,
	media: mediaSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})
