import { login } from '../../services/auth.service'
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';



export default function SignInForm() {
	const navigate = useNavigate();

	return (
		<>
			{/* обрабатываем состояние и валидиурем форму с помощью библиотки Formik */}
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Email is required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address'
					}
					if (!values.password) {
						errors.password = 'Password is required'
					}
					return errors;
				}}
				onSubmit={
					async (values) => {
						await login(values);
						navigate('/dashboard', { replace: true })
					}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
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
						<button className='mt-3' type="submit" disabled={Object.keys(errors).length}>
							Sign In
						</button>
					</Form>
				)}
			</Formik>
		</>
	)
}
