import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
          <TabList onChange={handleChange} >
            <Tab label="For you" value="1" sx={{flex:1}} />
            <Tab label="Following" value="2" sx={{flex:1}}/>
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}

export default LabTabs;