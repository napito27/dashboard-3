import React from 'react';

import { Box } from '@mui/material';

import Post from '../organisms/post';

function Thread({ avatar, data }) {
  // const [scrollPosition, setScrollPosition] = React.useState(0);

  // const handleScroll = () => {
  //   setScrollPosition(window.scrollY);
  // };

  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
    
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <Box className='thread-container'>      
      <Post avatar={avatar} data={data} />
    </Box>
  );
}

export default Thread;