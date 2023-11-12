import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Box, CssBaseline, Paper } from '@mui/material';


function Layout() {
  return (
    <Box style={{ height: "100vh", textAlign: "center"}}>
      <CssBaseline />
      <Grid container style={{paddingLeft: "100px", paddingRight: "100px"}} sx={{ flexGrow: 1 }} spacing={2}>
        
        {/** column 1*/ }
        <Grid item xs={2} >
          <Grid xs={12}>
            <Paper style={{ height: "96vh", background: "lightgray" }}> Navigation</Paper>
          </Grid>
        </Grid>

        {/** column 2 */}  
        <Grid item container xs={7} spacing={1} >
            <Grid item xs={12}>
              <Paper style={{ height: "15vh", background: "lightgray" }}> Header</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ height: "20vh", background: "lightgray" }}> User Input</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ height: "58vh", background: "lightgray" }}> Thread</Paper>
            </Grid>
        </Grid>

        {/** column 3 */}  
        <Grid item container xs={3} spacing={1}>
          <Grid item xs={12}>
            <Paper style={{ height: "10vh", background: "lightgray" }}> Search</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "15vh", background: "lightgray" }}> Container 1</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "50vh", background: "lightgray" }}> Container 2</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "15vh", background: "lightgray" }}> Container 3</Paper>
          </Grid>
        </Grid> 
      </Grid>
    </Box>
  );
}

export default Layout;