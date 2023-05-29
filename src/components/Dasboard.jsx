import * as React from 'react'
import { Link } from 'react-router-dom'
import { upload, getFiles, getFile, deleteFile } from '../services/media.service'
import { logout } from "../store/authSlice"
import { PhotoIcon, DocumentIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {
	const [files, setFiles] = React.useState([])
	const dispatch = useDispatch()

	// инициируем функцию загрузки файлов хранилища при первом рендере
	React.useEffect(() => {
		getFiles().then((files) => setFiles(files))
	}, [])

	// логику отправки формы выносим в отдельную функцию
	const handleSubmit = async (event) => {
		event.preventDefault()
		// данные передаем с помощью FormData
		const formData = new FormData(event.target)
		await upload(formData)
		const promise = getFiles()
		const files = await promise
		// обновляем состояние
		setFiles(files)
	}

	// обработчик удаления также выносим в отдельную функцию
	const handleDelete = (file) => {
		return async function (event) {
			event.preventDefault()
			await deleteFile(file.id)
			// обновляем состояние
			const array = files.filter(element =>
				element.id !== file.id)
			setFiles(array)
		}
	}


	return (
		<>
			<nav className="navigation">
				<div className="font-bold">Dasboard</div>
				<div className='flex gap-4'>
					<Link className="link" to="/" onClick={() => dispatch(logout)}>
						Log out
					</Link>
				</div>
			</nav>
			<div>
				files: <strong>{files.length}</strong>
				<ul>
					{/* перебираем массив */}
					{files.map(file => (
						<li
							key={file.id}
							className='flex items-center justify-between gap-2 mt-3'
						>
							<div>
								{/* если у нас картинка ... */}
								{file.mimeType === 'image/svg+xml' ||
									file.mimeType === 'image/png' ||
									file.mimeType === 'image/jpeg' ?
									// ... возвращаем иконку картинки
									<PhotoIcon className='w-8 h-8' /> :
									// ... иначе - иконку файла
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
					multiple
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