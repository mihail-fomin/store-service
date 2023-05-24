import * as React from 'react'
import { Link } from 'react-router-dom'
import { upload, getFiles, getFile, deleteFile } from '../services/media.service'

export default function Dashboard() {
	const [files, setFiles] = React.useState([])

	React.useEffect(() => {
		getFiles().then((files) => setFiles(files))
	}, [])

	const handleSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData(event.target)
		await upload(formData)
		const promise = getFiles()
		const files = await promise
		setFiles(files)
	}

	const handleDelete = (file) => {
		return async function (event) {
			event.preventDefault()
			await deleteFile(file.id)
			setFiles(files.filter(element => {
				return element.id !== file.id
			}))
		}
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
				files: <strong>{files.length}</strong>
				<ul>
					{files.map(file => (
						<li
							key={file.id}
							className='flex items-center gap-2'
						>
							{file.mimeType === 'image/svg+xml' || file.mimeType === 'image/png' || file.mimeType === 'image/jpeg' ?
								'1' :
								'2'
							}
							<button onClick={() => getFile(file)}>
								{file.name}
							</button>
							<button onClick={handleDelete(file)}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
								</svg>
							</button>


						</li>
					))}
				</ul>
			</div>
			<form className='mt-3' onSubmit={handleSubmit}>
				<input
					name='files[]'
					type='file'
					disabled={files.length === 20}
				/>
				<button
					type='submit'
					disabled={files.length === 20}
				>
					Upload
				</button>
			</form>
		</>

	)
}