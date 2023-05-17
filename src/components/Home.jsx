import {
	Link,
} from "react-router-dom";

export default function Home() {


	return (
		<>
			<div className="flex justify-between">
				<div>Home</div>
				<div className='flex gap-2'>
					<Link to="/sign-up">Sign Up</Link>
					<Link to="/sign-in">Sign In</Link>
				</div>
			</div>

		</>
	)
}