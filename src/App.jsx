import './App.css'
import Home from './components/Home';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn';
import {
	Routes,
	Route,
} from "react-router-dom";

function App() {


	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/sign-in" element={<SignIn />} />
		</Routes>
	)
}

export default App
