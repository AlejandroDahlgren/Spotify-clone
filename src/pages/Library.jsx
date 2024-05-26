import { Box, Typography, List } from '@mui/material';
import { useEffect, useState } from 'react';
import PlaylistItem from '../components/PlaylistItem/PlaylistItem';

const Library = ({token, spotifyApi}) => {
    const [albumList, setAlbumList] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getPlaylists() {
			if (!spotifyApi) return;

			const data = await spotifyApi.getUserPlaylists();
			setAlbumList(data.body.items);
			setLoading(false);
		}

		getPlaylists();
	}, [spotifyApi, token]);

    const renderPlaylistItems = () => {
        if(loading) {
            return [1,2,3,4,5,6,7,8].map((_, i) => <PlaylistItem loading={loading} key={i}/>)
        }
        return albumList.map((playlists, i) => (
			<PlaylistItem   {...playlists} loading={loading} key={i}/>))

    } 

	return (
		<Box
			id="Library"
			px={3}
			sx={{
				display: { xs: 'flex', md: 'none' },
				backgroundColor: 'background.default',
				flex: 1,
				flexDirection: 'column',
				overyflowY: 'auto'
			}}
		>
            <Typography py={3} sx={{color: 'text.primary', fontSize: 30}}>
                Ditt blibliotek
            </Typography>
            <List>
                {renderPlaylistItems()}
            </List>
        </Box>
	);
};

export default Library;
