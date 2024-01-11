import { Avatar, Box } from '@mui/material';
import UserAvatar from './user-avatar';

function Follow({avatar}) {

  return (
    <div className='follow-container'>
      <h3>Who to follow</h3>
      <div className='follow-inner-cont'>
        <div className='user-info'>
          {/* <UserAvatar />   */}
          <Box >
            <Avatar src={avatar} alt='user avatar' />
          </Box>
          <div>
            <p>User</p>
            <p>@userId</p>
          </div>
        </div>
        <button className='btn'>Follow</button>
      </div>
      <div className='follow-inner-cont'>
        <div className='user-info'>
          {/* <UserAvatar />   */}
          <Box >
            <Avatar src={avatar} alt='user avatar' />
          </Box>
          <div>
            <p>User</p>
            <p>@userId</p>
          </div>
        </div>
        <button className='btn'>Follow</button>
      </div>
      <div className='follow-inner-cont'>
        <div className='user-info'>
          {/* <UserAvatar />   */}
          <Box >
            <Avatar src={avatar} alt='user avatar' />
          </Box>
          <div>
            <p>User</p>
            <p>@userId</p>
          </div>
        </div>
        <button className='btn'>Follow</button>
      </div>
      <button className='follow-btn'>Show more</button>
    </div>
  );
}

export default Follow;