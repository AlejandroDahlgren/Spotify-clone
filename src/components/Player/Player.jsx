import { Box, Grid, Typography, Avatar } from '@mui/material';
import { useEffect } from 'react';

const Player = ({ spotifyApi, token }) => {
	useEffect(() => {

		const script = document.createElement("script");
		script.src = "https://sdk.scdn.co/spotify-player.js";
		script.async = true;
	
		document.body.appendChild(script);
	
		window.onSpotifyWebPlaybackSDKReady = () => {	
			const player = new window.Spotify.Player({
				name: 'ACD Spotify friend',
				getOAuthToken: cb => { 
					cb(token); 
				},
				volume: 0.5
			});
		
			player.addListener('ready', ({ device_id }) => {
				console.log('Ready with Device ID', device_id);
			});
	
			player.addListener('not_ready', ({ device_id }) => {
				console.log('Device ID has gone offline', device_id);
			});

			player.addListener('player_state_changed', (state) => {
				console.log(state);
			});
		
			player.connect();
	
		};
	}, []);




	return (
		<Box>
			<Grid
				container
				px={3}
				sx={{
					backgroundColor: 'background.paper',
					height: 100,
					cursor: { xs: 'pointer', md: 'auto' },
					width: '100%',
                    borderTop: '1px solid #292929'
				}}
			>
				<Grid
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start'
					}}
					xs={12}
					md={4}
					items
				>
					<Avatar src={null} alt='null' variant='square' sx={{ width: 56, height: 56, marginRight: 2}} />
                    <Box>
                        <Typography sx={ {color: 'text.primary', fontSize: 14} } >Cant take a Joke</Typography>
                        <Typography sx={ {color: 'text.secondary', fontSize: 12} } >Drake</Typography>
                    </Box>
                </Grid>
				<Grid
					sx={{
						display: { xs: 'none', md: 'flex' },
						justifyContent: 'center',
						alignItems: 'center'
					}}
					md={4}
					items
				>
					Play knappen
				</Grid>
				<Grid xs={6} md={4} items sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
					Volume
				</Grid>
			</Grid>
		</Box>
	);
};

export default Player;