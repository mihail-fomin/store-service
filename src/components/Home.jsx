import {
	Link,
} from "react-router-dom";

export default function Home() {


	return (
		<>
			<nav className="navigation">
				<div className="font-bold">Home</div>
				<div className='flex gap-4'>
					<Link className="link" to="/sign-up">Sign Up</Link>
					<Link className="link" to="/sign-in">Sign In</Link>
				</div>
			</nav>
			<h1 className="text-3xl font-bold text-center">Welcome to the store service</h1>
			<Link
				to="/sign-up"
				className="block p-2 mt-3 transition-all duration-100 border-2 rounded border-sky-700 hover:bg-sky-100"
			>
				Sign Up
			</Link>

		</>
	)
}