import { register, login, logout } from '../services/auth.service'
import * as React from 'react'



export default function SignUp() {
	const [value, setValue] = React.useState({ name: '', email: '', password: '' })


	return (
		<>
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			<form onSubmit={
				(e) => {
					e.preventDefault()
					register(value)
				}
			}>
				<label>
					email
					<input
						className='block border-2 border-sky-700'
						type='email'
						value={value.email}
						onChange={(e) => setValue({
							email: e.target.value,
							name: value.name,
							password: value.password,
						})}
					/>
				</label>
				<label>
					name
					<input
						className=' block border-2 border-sky-700'
						type='text'
						value={value.name}
						onChange={(e) => setValue({
							email: value.email,
							name: e.target.value,
							password: value.password,
						})} />
				</label>
				<label>
					password
					<input
						className='block border-2 border-sky-700'
						type='password'
						value={value.password}
						onChange={(e) => setValue({
							email: value.email,
							name: value.name,
							password: e.target.value,
						})} />
				</label>
				<button
					type='submit'
				>
					Sign up
				</button>
			</form>
		</>
	)

}