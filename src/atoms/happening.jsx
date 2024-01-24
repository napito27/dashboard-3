import { MoreHorizOutlined } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';

function Happening() {

  return (
    <Box className='happening-container border-radius-box'>
      <h3 className='box-title'>What's happening</h3>

      <Box className='display-box-button'>
        <Box>
          <p>Trending</p>
          <h4>VSCode</h4>
          <p>7,327 posts</p>  
        </Box>
        <Tooltip title="More">        
          <MoreHorizOutlined className='more-icon'/>       
        </Tooltip>
      </Box>

      <Box className='display-box-button'>
        <Box>
          <p>Business and finance · Trending</p>
          <h4>Racing Bulls</h4>
          <p>7,327 posts</p>  
        </Box>
        <Tooltip title="More">        
          <MoreHorizOutlined className='more-icon'/>       
        </Tooltip>
      </Box>

      <Box className='display-box-button'>
        <Box>
          <p>Politics · Trending</p>
          <h4>Netanyahu</h4>
          <p>7,327 posts</p>  
        </Box>
        <Tooltip title="More">        
          <MoreHorizOutlined className='more-icon'/>       
        </Tooltip>
      </Box>

      <Box className='display-box-button'>
        <Box>
          <p>Trending</p>
          <h4>Toro Rosso</h4>
          <p>7,327 posts</p>  
        </Box>
        <Tooltip title="More">        
          <MoreHorizOutlined className='more-icon'/>       
        </Tooltip>
      </Box>

      <button className='btn-box-width'>Show more</button>
    </Box>
  );
}

export default Happening;