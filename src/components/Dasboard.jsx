import * as React from 'react'
import { Link } from 'react-router-dom'
import { upload, getFiles } from '../services/media.service'

export default function Dashboard() {

	const [files, setFiles] = React.useState([])
	React.useEffect(() => {
		getFiles().then((files) => setFiles(files))
	}, [setFiles])

	const handleSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData(event.target)
		await upload(formData)
	}


	return (
		<>
			<nav className="navigation">
				<div className="font-bold">Dasboard</div>
				<div className='flex gap-4'>
					<Link className="link" to="/">Log out</Link>
				</div>
			</nav>
			<div>
				files
				<ul>
					{files.map(file => (
						<li key={file.id}>
							{file.name}
						</li>
					))}
				</ul>
				<button onClick={getFiles}>
					Get Files
				</button>
			</div>
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