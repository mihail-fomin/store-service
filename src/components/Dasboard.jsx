import * as React from 'react'
import { Link } from 'react-router-dom'
import { upload, getFiles, getFile, deleteFile } from '../services/media.service'
import { PhotoIcon, DocumentIcon, TrashIcon } from '@heroicons/react/24/outline'

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
							className='flex items-center justify-between gap-2 mt-3'
						>
							<div>
								{file.mimeType === 'image/svg+xml' ||
									file.mimeType === 'image/png' ||
									file.mimeType === 'image/jpeg' ?
									<PhotoIcon className='w-8 h-8' /> :
									<DocumentIcon className='w-8 h-8' />
								}
							</div>
							<button className='min-w-full' onClick={() => getFile(file)}>
								{file.name}
							</button>
							<button onClick={handleDelete(file)}>
								<TrashIcon className='w-6 h-6' />
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
					className='mt-3'
					type='submit'
					disabled={files.length === 20}
				>
					Upload
				</button>
			</form>
		</>

	)
}