import {
	Link,
} from "react-router-dom";
import SignUpForm from './SignUpForm'


export default function SignUp() {

	return (
		<>
			<nav className="navigation">
				<div className="font-bold">Sign Up</div>
				<div className='flex gap-3'>
					<Link className="link" to="/">Home</Link>
					<Link className="link" to="/sign-in">Sign In</Link>
				</div>
			</nav>
			<SignUpForm />
		</>
	)

}