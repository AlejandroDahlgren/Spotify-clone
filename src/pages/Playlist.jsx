import { Avatar, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { useCallback } from 'react';

const Playlist = ({ spotifyApi, token }) => {
	const [playlistinfo, setplaylistinfo] = useState();
	const [songs, setSongs] = useState([]);
	const { id } = useParams();
	

	const formatSongs = useCallback(
		(items) =>
		items.map((item, i) => {
		   console.log({ item, i});
		   const {track} = item; 
		   track.contextUri = `spotify:playlist:${id}`;
		   track.position = i;
		   return track;
   }), [id])

	useEffect(() => {
		const getData = async () => {
			try {
				const playlistDetails = await spotifyApi.getPlaylist(id);
				setplaylistinfo({
					image: playlistDetails.body.images[0].url,
					name: playlistDetails.body.name

				});
				const { items } = playlistDetails.body.tracks;

				const formattedSongs = formatSongs(items);
				setSongs(formattedSongs);
		} catch(e) {
			console.error(e)
		}
	}
		getData()

	}, [id, formatSongs]);

	return (
		<Box id="Playlist__page" sx={{ backgroundColor: 'background.paper', flex: 1, overflowY: 'auto' }}>
			<Box
				p={{ xs: 3, md: 4 }}
				sx={{
					width: '100%',
					background: 'linear-gradient(0deg, #121212 0%, #1bd76060 100%)',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: { xs: 'flex-start', md: 'flex-end', xl: 'center' },
					gap: 3,
					boxSizing: 'border-box',
					flexDirection: {xs: 'column', md: 'row'}
				}}
			>
				<Avatar
					src={playlistinfo?.image}
					variant="square"
					alt={playlistinfo?.name}
					sx={{ boxShadow: 15, width: { xs: '100%', md: 235 }, height: { xs: '100%', md: 235 } }}
				/>
				<Box>
					<Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'text.primary' }}>Playlist</Typography>
					<Typography sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 'bold', color: 'text.primary' }}>
					{playlistinfo?.name}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Playlist;
