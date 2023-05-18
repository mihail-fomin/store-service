import { login } from '../services/auth.service'
import * as React from 'react'
import {
	Link,
} from "react-router-dom";



export default function () {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')


	return (
		<>
			<nav className="navigation">
				<div className="font-bold">Sign In</div>
				<div className='flex gap-2'>
					<Link className="link" to="/">Home</Link>
					<Link className="link" to="/sign-up">Sign Up</Link>
				</div>
			</nav>

			<form
				className='mt-3'
				onSubmit={
					() => {
						e.preventDefault()
						login(email, password)
					}
				}>

				<label>
					email
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					password
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
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