import { Box } from '@mui/material';

function Subscribe({ theme }) {

  return (
    <Box className={`${theme} subscribe-container`}>
      <h3>Subscribe to Premium</h3>
      <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
      <button className='btn'>Subscribe</button>
    </Box>
  );
}

export default Subscribe;