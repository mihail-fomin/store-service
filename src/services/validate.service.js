export const validateSignUp = (values) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Email is required';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address';
	}

	if (!values.name) {
		errors.name = 'Name is required';
	} else if (
		!/^[-A-ZА-Я' ]+?$/iu.test(values.name)
	) {
		errors.name = 'Invalid name';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	}
	return errors;
}

export const validateSignIn = (values) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Email is required';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	}
	return errors;
}