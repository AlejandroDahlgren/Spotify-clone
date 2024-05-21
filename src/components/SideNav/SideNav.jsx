import { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import NavItem from '../NavItem/NavItem';
import HomeIcon from '@mui/icons-material/Home';
import NavPlaylist from '../NavPlaylist/NavPlaylist';

const SideNav = ({ spotifyApi, token }) => {
	const [playlists, setPlaylists] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getPlaylists() {
			if (!spotifyApi) return;

			const data = await spotifyApi.getUserPlaylists();
			setPlaylists(data.body.items)
			setLoading(false)
		}

		getPlaylists();
	}, [spotifyApi, token]);

	return (
		<Box
			sx={{
				backgroundColor: 'Background.default',
				width: 230,
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Box p={3}>
				<img src="/Spotify_Logo.png" alt="Spotify logo" width={'75%'} />
			</Box>
			<NavItem name="Home" Icon={HomeIcon} target="/" />
			<Box p={3} py={1}>
				<Divider sx={{ backgroundColor: '#ffffff40' }} />
			</Box>
			<Box sx={{ overflowY: 'auto', flex: 1 }}>
				<NavPlaylist loading={false} name='pop' id='123'/>
			</Box>
		</Box>
	);
};

export default SideNav;
