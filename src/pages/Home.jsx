import {Box, Button} from '@mui/material'

const Home = () => {
    return (
        <Box sx={{
            flex: 1,
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column', 
            gap: 5,
        }}>
            <img src="/TA-logo.png" alt="Techover" style={{ maxWidth: '50%', maxHeight: '50%'}} />
            <Button size="large" variant="contained" href="https://www.linkedin.com/in/alejandro-dahlgren-369682131/">
                kontakta mig!
            </Button>
        </Box>
    );
};

export default Home;