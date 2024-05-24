import { Slider, Stack, Grid } from '@mui/material';
import { VolumeDown, VolumeUp, VolumeOff } from '@mui/icons-material';
import { useState } from 'react';

const PlayerVolume = ({ player }) => {
    const defaultVolume = 50;
	const [volume, setVolume] = useState(defaultVolume);

	const handleVolumeChange = async (v) => {
		try {
			await player.setVolume(v / 10);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Grid   item
                xs={3}
                sx={{
                    display: { xs: 'none', md: 'flex'},
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}  
        >
			<Stack direction='row' spacing={2} alignItems='center' sx={{ width: 150, color: 'text.secondary' }}>
				{volume === 0 ? <VolumeOff /> : volume < 50 ? <VolumeDown /> : <VolumeUp />}
				<Slider
					min={0}
					max={100}
					step={1}
					values={volume}
					onChange={(e, v) => setVolume(v)}
					onChangeCommitted={async (_, v) => {
						handleVolumeChange(v);
					}}
				/>
			</Stack>
		</Grid>
	);
};

export default PlayerVolume;
