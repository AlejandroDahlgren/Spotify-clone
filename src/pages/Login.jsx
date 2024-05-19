import React from 'react';
import { Box, Button } from '@mui/material';
import { accessUrl } from '../config/config';

const Login = () => {
	return (
		<Box>
			<img
				src="/Spotify_Logo.png"
				alt="Techover logo"
				style={{ marginBottom: '300px', width: '70%', maxWidth: '500px' }}
			/>
			<Button  href={accessUrl} color='primary' size='large' variant='contained'>
				Loging to Spotify
			</Button>
		</Box>
	);
};

export default Login;
