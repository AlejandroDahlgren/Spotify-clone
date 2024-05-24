import { Stack, Typography, Slider, IconButton } from '@mui/material';
import { formatTime } from '../../utilities/formatTime';
import { PlayCircle, SkipNext, SkipPrevious, Pause } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const PlayerControls = ({ is_paused, duration, progress, player }) => {
	const [currentProgress, setCurrentProgress] = useState(progress);
	const skipStyle = { width: 28, Height: 28 };
	const playStyle = { width: 38, Height: 38 };

	useEffect(() => {
		const intervalId = setInterval(() => {
			if(!is_paused && player) {
				setCurrentProgress((prevState) => prevState + 1)
			}
		}, 1000);
		return () => clearInterval(intervalId);
	},[is_paused, player]);

	useEffect(() => {
		setCurrentProgress(progress);
	},[progress]);

	return (
		<Stack direction={'column'} spacing={2} justfy={'center'} alignItems={'center'} sx={{ width: '100%' }}>
			<Stack spacing={1} direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
				<IconButton
					size="small"
					sx={{ color: 'text.primary' }}
					onClick={() => {
						setCurrentProgress(0);
						player.previousTrack();
					}}
				>
					<SkipPrevious sx={skipStyle} />
				</IconButton>
				<IconButton
					size="large"
					sx={{ color: 'text.primary' }}
					onClick={() => {
						setCurrentProgress(0);
						player.togglePlay();
					}}
				>
					{is_paused ? <PlayCircle fontSize={'inherit'} sx={playStyle} /> : <Pause sx={playStyle} fontSize={'inherit'} />}
				</IconButton>
				<IconButton
					size="small"
					sx={{ color: 'text.primary' }}
					onClick={() => {
						setCurrentProgress(0);
						player.nextTrack();
					}}
				>
					<SkipNext sx={skipStyle} />
				</IconButton>
			</Stack>
			<Stack spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{ width: '75%' }}>
				<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>{formatTime(progress)}</Typography>
				<Slider
					max={duration}
					value={currentProgress}
					min={0}
					size="medium"
					onChange={(event, value) => {
						console.log('Changed' ,value);
						setCurrentProgress(value)
					}}
					onChangeCommitted={(event, value) => {
						player.seek(60 * 1000);
					}}
				/>
				<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>{formatTime(duration)}</Typography>
			</Stack>
		</Stack>
	);
};

export default PlayerControls;
