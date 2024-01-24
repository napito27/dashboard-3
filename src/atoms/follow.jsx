import { Avatar, Box } from '@mui/material';

function Follow({avatar}) {

  return (
    <Box className='follow-container border-radius-box'>
      <h3 className='box-title'>Who to follow</h3>
      
      <Box className='display-box-button'>
        <Box className='user-info'>
          <Box >
            <Avatar src={avatar} alt='avatar' />
          </Box>
          <Box>
            <h5>User</h5>
            <p>@userId</p>
          </Box>
        </Box>
        <button className='btn'>Follow</button>
      </Box>
      
      <Box className='inner-box display-box-button'>
        <Box className='user-info'>
          <Box >
            <Avatar src={avatar} alt='avatar' />
          </Box>
          <Box>
            <h5>User</h5>
            <p>@userId</p>
          </Box>
        </Box>
        <button className='btn'>Follow</button>
      </Box>
      
      <Box className='inner-box display-box-button'>
        <Box className='user-info'>
          <Box >
            <Avatar src={avatar} alt='avatar' />
          </Box>
          <Box>
            <h5>User</h5>
            <p>@userId</p>
          </Box>
        </Box>
        <button className='btn'>Follow</button>
      </Box>

      <button className='btn-box-width'>Show more</button>
    </Box>
  );
}

export default Follow;