import {
	Link,
} from "react-router-dom";
import SignInForm from '../SignIn/SignInForm'


export default function SignIn() {


	return (
		<>
			<nav className="navigation">
				<div className="font-bold">Sign In</div>
				<div className='flex gap-3'>
					<Link className="link" to="/">Home</Link>
					<Link className="link" to="/sign-up">Sign Up</Link>
				</div>
			</nav>
			<SignInForm />
		</>
	)
}