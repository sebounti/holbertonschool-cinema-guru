import './navigation.css';

const Header = ({ userUsername, setIsLoggedIn }) => {
	const logout = () => {
		localStorage.removeItem('accessToken')
		setIsLoggedIn(false)
	}
	return (
		<nav className='navigation-header'>
			<h1>Cinema Guru</h1>
			<span>
				<img src="https://picsum.photos/100/100" alt="Profile picture" />
				<p>Welcome, {userUsername}!</p>
				<span onClick={logout}>Logout</span>
			</span>
		</nav>
	)
}

export default Header;
