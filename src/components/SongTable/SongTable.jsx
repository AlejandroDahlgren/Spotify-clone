import { Box, Divider, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SongRow from '../SongRow/SongRow';

const SongTable = ({ songs, loading, spotifyApi }) => {
	const renderSongs = () => {
		if (loading) {
			return [1].map((e, i) => <SongRow loading={loading} key={i} i={i} images={null} />);
		}

		return songs.map((song, i) => (
			<SongRow
				images={song.album.images}
				title={song.name}
				artist={song.artists[0].name}
				duration={song.duration_ms / 1000}
				album={song.album.name}
                key={i}
                i={i}
                position={song.position}
                contextUri={song.contextUri}
                spotifyApi={spotifyApi}
			/>
		));
		/**title, duration,*/
	};

	return (
		<Box
			p={{ xs: 3, md: 4 }}
			sx={{
				flex: 1,
				overflowY: 'auto',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Grid container px={2} p={1} sx={{ width: '100%', color: 'text.secondary', fontSize: 14 }}>
				<Grid item sx={{ width: 35, display: 'flex', alignItems: 'center' }}>
					#
				</Grid>
				<Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
					Title
				</Grid>
				<Grid xs={3} item sx={{ display: { xs: 'none', md: 'flex' } }}>
					Album
				</Grid>
				<Grid xs={3} item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
					<AccessTimeIcon sx={{ width: 20, height: 20 }} />
				</Grid>
			</Grid>
			<Box pb={2}>
				<Divider sx={{ width: '100%' }} />
			</Box>
			{renderSongs()}
		</Box>
	);
};

export default SongTable;
