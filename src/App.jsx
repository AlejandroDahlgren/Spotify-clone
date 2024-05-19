import SpotifyWebApi from 'spotify-web-api-node';
import './App.css';
import { Box } from '@mui/material';
import Login from './pages/Login.jsx';

function App({ spotifyApi }) {
	return (
		<Box className="App">
			<h1>Techover Self Made - Spotify</h1>
			<Login/>
		</Box>
	);
}

export default App;
