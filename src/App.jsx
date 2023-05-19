import Home from './components/Home';
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dasboard';
import {
	Routes,
	Route,
} from "react-router-dom";

function App() {


	return (
		<div className="w-[90%] mx-auto relative flex flex-col items-center justify-center h-screen">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	)
}

export default App
