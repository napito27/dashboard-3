import { Avatar, Box } from '@mui/material';

function UserAvatar({ avatar }) {

  return (
    <Box >
      <Avatar src={avatar} alt='user avatar' />
    </Box>
  );
}

export default UserAvatar;