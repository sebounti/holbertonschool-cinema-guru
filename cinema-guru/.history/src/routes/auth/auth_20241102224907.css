import './auth.css';
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import axios from 'axios';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
	const [_switch, setSwitch] = useState(false)
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const handleSwitch = (value) => {
		setSwitch(value)
		setPassword("")
		setUsername("")
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		if (_switch) {
			axios.post('http://localhost:8000/api/auth/login', {
				username, password
			}).then(response => {
				if (response.data.accessToken) {
					localStorage.setitem("accessToken", response.data.accessToken)
					setUserUsername(username)
					setIsLoggedIn(true)
				}
			})
		} else {
			axios.post('http://localhost:8000/api/auth/register', {
				username, password
			}).then(response => {
				if (response.data.accessToken) {
					localStorage.setItem("accessToken", response.data.accessToken)
					setUserUsername(username)
					setIsLoggedIn(true)
				}
			})
		}
	}
	return (
		<form className="authentication" onSubmit={handleSubmit}>
			<header>
				<ul>
					<li onClick={() => handleSwitch(true)} className={_switch ? 'active' : ''}>Sign in</li>
					<li onClick={() => handleSwitch(false)} className={!_switch ? 'active' : ''}>Sign up</li>
				</ul>
			</header>
			<main>
				{_switch ? <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} /> :
				<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}
			</main>
		</form>
	);
}

export default Authentication;
