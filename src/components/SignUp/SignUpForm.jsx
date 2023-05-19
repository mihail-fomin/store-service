import { register } from '../../services/auth.service'
import * as React from 'react'
import { Formik, Form, Field } from 'formik';

export default function SignUpForm() {


	return (
		<>
			<Formik
				initialValues={{ email: '', name: '', password: '' }}
				validate={values => {
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
				}}
				onSubmit={(values, { setSubmitting }) => {
					register(values)
					setSubmitting(false);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<Form onSubmit={handleSubmit}>

						<label>
							email
							<Field
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
						</label>
						{errors.email && touched.email &&
							<div className='text-red-500'>{errors.email}</div>
						}

						<label>
							name
							<Field
								type="name"
								name="name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
							/>
						</label>
						{errors.name && touched.name &&
							<div className='text-red-500'>{errors.name}</div>
						}

						<label>
							password
							<Field
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
						</label>
						{errors.password && touched.password &&
							<div className='text-red-500'>{errors.password}</div>}

						<button type="submit" disabled={Object.keys(errors).length}>
							Sign In
						</button>
					</Form>
				)}
			</Formik>
		</>
	)
}