import axios from 'axios';
import * as React from 'react'
import { upload } from '../services/media.service'

export default function Dashboard() {
	// const [files, setFiles] = React.useState([])

	// const handleInputChange = (e) => {
	// 	e.preventDefault()
	// 	const files = []
	// 	e.target.files.forEach(el => {
	// 		files.push(el)
	// 	})
	// 	setFiles(files)
	// }

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
					name='media'
					type='file'
				// onChange={handleInputChange}
				/>
				<button type='submit'>Upload</button>
			</form>
		</>

	)
}