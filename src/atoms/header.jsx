import React from 'react';

import {Box, Tooltip} from '@mui/material';
import {SettingsOutlined} from '@mui/icons-material';

function Header() {
  const [active, setActive] = React.useState('For you');

  return (
    <Box className='fixed-btn-container'>
      <Box className='header-container'>
        <Box className='header-btn-container'>
          <Box className="button-group">
            {['For you', 'Following'].map((button) => (
              <span
                key={button}
                className={active === button ? 'active' : ''}
                onClick={() => setActive(button)}
              >
                {button}
              </span>
            ))}
          </Box>
          <Box className='settings-icon-tooltip'>
            <Tooltip title="Timeline Settings">
              <SettingsOutlined className='settings-icon'/>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;