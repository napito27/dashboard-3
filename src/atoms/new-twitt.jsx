import React from 'react';

import { Box, InputBase } from '@mui/material';
import { PublicOutlined } from '@mui/icons-material';

function NewTwitt() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
      <InputBase 
        type='text'
        placeholder="What is happening?!"
        onFocus={() => setIsActive(true)}
        sx={{padding:'16px 0 12px', fontSize:'20px', color:'gray'}}
        onBlur={() => setIsActive(false)}
      />
      
      {isActive && <div className='reply-btn-container'><button 
        className='who-can-reply' 
      >
        <PublicOutlined sx={{padding:'0', fontSize:'16px', margin:'0 0 -3px'}}/> Everyone can reply
      </button>
      <hr />
      </div>
      }
    </Box>
  );
};


export default NewTwitt;