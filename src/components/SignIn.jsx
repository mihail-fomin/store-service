import { login } from '../services/auth.service'
import * as React from 'react'
import {
	Link,
} from "react-router-dom";



export default function SignIn() {
	const [value, setValue] = React.useState({ email: '', password: '' })


	return (
		<>
			<nav className="navigation">
				<div className="font-bold">Sign In</div>
				<div className='flex gap-2'>
					<Link to="/">Home</Link>
					<Link to="/sign-up">Sign Up</Link>
				</div>
			</nav>

			<form
				className='mt-3'
				onSubmit={
					(e) => {
						e.preventDefault()
						login(value)
					}
				}>

				<label>
					email
					<input
						type='email'
						value={value.email}
						onChange={(e) => setValue({

							email: e.target.value,
							password: value.password,
						})} />
				</label>
				<label>
					password
					<input
						type='password'
						value={value.password}
						onChange={(e) => setValue({

							email: value.email,
							password: e.target.value,
						})} />
				</label>
				<button
					type='submit'
				>
					Sign in
				</button>
			</form>
		</>
	)

}