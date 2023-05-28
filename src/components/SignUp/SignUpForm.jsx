import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { register } from '../../services/auth.service'
import { validateSignUp } from '../../services/validate.service';

export default function SignUpForm() {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const email = useSelector(state => state.auth.email)
	const name = useSelector(state => state.auth.name)
	const password = useSelector(state => state.auth.password)


	return (
		<>
			{/* обрабатываем состояние и валидиурем форму с помощью библиотки Formik */}
			<Formik
				initialValues={{ email, name, password }}
				validate={validateSignUp}
				onSubmit={(values, { setSubmitting }) => {
					const response = register(values)
					setSubmitting(false);
					if (response) {
						navigate('/sign-in')
					}
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

						<button className='mt-3' type="submit" disabled={Object.keys(errors).length}>
							Sign In
						</button>
					</Form>
				)}
			</Formik>
		</>
	)
}
