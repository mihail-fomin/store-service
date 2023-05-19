import { register } from '../../services/auth.service'
import * as React from 'react'
import {
	Link,
} from "react-router-dom";
import SignUpForm from './SignUpForm'


export default function SignUp() {
	const [email, setEmail] = React.useState('')
	const [name, setName] = React.useState('')
	const [password, setPassword] = React.useState('')

	return (
		<>
			<nav className="navigation">
				<div className="font-bold">Sign Up</div>
				<div className='flex gap-2'>
					<Link className="link" to="/">Home</Link>
					<Link className="link" to="/sign-in">Sign In</Link>
				</div>
			</nav>

			<SignUpForm />

			{/* <form
				className='mt-3'
				onSubmit={
					(e) => {
						e.preventDefault()
						register(email, name, password)
					}
				}
			>
				<label>
					email
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					name
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					password
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)} />
				</label>
				<button
					type='submit'
				>
					Sign up
				</button>
			</form> */}
		</>
	)

}