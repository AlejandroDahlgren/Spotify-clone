import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';

const Dashboard = ({ SpotifyApi }) => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Box
				sx={{
					flex: 1,
                    overflowY: 'auto',
                    display: 'flex'
				}}
			>
				<Routes>
					<Route path="playlist/:id" element={<div>Plylist</div>} />
					<Route path="library" element={<div>Library</div>} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Box>
		</Box>
	);
};

export default Dashboard;
