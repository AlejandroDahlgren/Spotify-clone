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
			setPlaylists(data.body.items);
			setLoading(false);
		}

		getPlaylists();
	}, [spotifyApi, token]);

	const renderPlaylist = () => {
		if(loading) {
			return [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => <NavPlaylist loading={loading}  key={i} />);
		};
		return playlists.map((playlists, i) => (
			<NavPlaylist {...playlists} loading={loading} key={i} />
		));
	};

	return (
		<Box
			sx={{
				backgroundColor: 'Background.default',
				width: 230,
				height: '100%',
				display: { xs: 'none', md: 'block' },
				flexDirection: 'column'
			}}
		>
			<Box p={3}>
				<img src="/Spotify_Logo.png" alt="Spotify logo" width={'75%'} />
			</Box>
			<NavItem name="Home" Icon={HomeIcon} target="/" active />
			<Box p={3} py={1}>
				<Divider sx={{ backgroundColor: '#ffffff40' }} />
			</Box>
			<Box sx={{ overflowY: 'auto', flex: 1 }}>{renderPlaylist()}</Box>
		</Box>
	);
};

export default SideNav;
