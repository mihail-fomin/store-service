import * as React from 'react'
import { upload } from '../services/media.service'

export default function Dashboard() {

	const handleSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData(event.target)
		await upload(formData)
	}


	return (
		<>
			<h1>Dashboard</h1>
			<form onSubmit={handleSubmit}>
				<input
					name='files[]'
					type='file'
				/>
				<button type='submit'>Upload</button>
			</form>
		</>

	)
}