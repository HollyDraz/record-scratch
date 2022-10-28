import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';
// MUI 
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';

function Header(){
    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

    return(
        <div>
             <Typography align='center'> </Typography>
             <Grid container direction="row" justifyContent="center" alignItems="flex-start" >
                {/* align buttons  */}
               
             
        <img src="record1.png" width="300" height="300" onClick={() => history.push('/info')}         onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}/>
        <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus >
            About
            
             </Popover>
         

             <IconButton>
                create 
             <img src="record2.png" width="300" height="300" onClick={() => history.push('/create')}/>
             </IconButton>

             <IconButton>
                Home page 
             <img src="record3.png" width="300" height="300" onClick={() => history.push('/homepage')}/>
             </IconButton>

             <IconButton>
                Logout
             <img src="scratch.png" width="300" height="300" onClick={() => history.push('/login')}/>
             </IconButton>


             </Grid>
            


        </div>
    )

}

export default Header;