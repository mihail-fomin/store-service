import { login } from '../services/auth.service'
import * as React from 'react'



export default function SignIn() {
	const [value, setValue] = React.useState({ email: '', password: '' })


	return (
		<>
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			<form onSubmit={
				(e) => {
					e.preventDefault()
					login(value)
				}
			}>

				<label>
					email
					<input
						className=' block border-2 border-sky-700'
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
						className='block border-2 border-sky-700'
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