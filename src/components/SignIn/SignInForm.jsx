import { login } from "../../services/auth.service"
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { validateSignIn } from '../../services/validate.service';
import { useDispatch, useSelector } from 'react-redux';


export default function SignInForm() {
	const dispatch = useDispatch()
	const navigate = useNavigate();

	return (
		<>
			{/* обрабатываем состояние и валидиурем форму с помощью библиотки Formik */}
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={validateSignIn}
				onSubmit={
					(values) => {
						login(values)
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
