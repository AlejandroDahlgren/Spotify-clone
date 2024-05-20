import { Box } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Login from './pages/Login.jsx';
import { getAccessToken } from './utilities/getAccessToken.js';
import { getAccessTokenFromStorage } from './utilities/getAccessTokenFromStorage.js';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App({ spotifyApi }) {
	const [token, setToken] = useState(getAccessTokenFromStorage);

	useEffect(() => {
		const accessToken = getAccessTokenFromStorage() || getAccessToken();
		if (accessToken) {
			setToken(accessToken);
			sessionStorage.setItem('spotifyToken', accessToken);
			window.location.hash = '';
		}
	}, []);
	return (
		<Box className="App">
			{token ? (
				<Dashboard spotifyApi={spotifyApi} />
			) : (
				<Routes>
					<Route path="*" element={<Login />} />
				</Routes>
			)}
		</Box>
	);
}

export default App;
