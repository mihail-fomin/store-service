

export const store = configureStore({
	reducer: {
		form: formReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(localStorageMiddleware)
});