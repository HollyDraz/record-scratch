// this is a new navigation that will 
//eventually replace the current navigation we have


//imports here 
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
//import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
//import { useSelector } from 'react-redux';
//import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
//import CssBaseline from '@mui/material/CssBaseline';
//import AppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
//import Typography from '@mui/material/Typography';

// function 

function SideNav({drawerWidth = 170}) {
    const history = useHistory();
    const dispatch = useDispatch();
  
      return(

      <Drawer
        PaperProps={{ sx: { borderRightWidth: 2, padding: '0px' } }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          
        }}
        variant="permanent"
        anchor="left"
      >
  
        
  
        <List>
            <ListItem >
            <img class="rotate" src="record1.png" width="80" height="80"/>
            <Button  variant='outlined' onClick={() => history.push('/home')}> Home </Button>
            </ListItem>
  
            <ListItem >
            <img class="rotate" src="record1.png" width="80" height="80"/>
            <Button  variant='outlined' onClick={() => history.push('/create')}>Create</Button>
            </ListItem>
  
            <ListItem>
            <img class="rotate" src="scratch.png" width="80" height="80" />
            <Button  variant='outlined'   onClick={() => dispatch({ type: 'LOGOUT' })}>Log out </Button>
            </ListItem>

            <ListItem>
            <img class="rotate" src="scratch.png" width="80" height="80" onClick={() => history.push('/profile')}/>
            <Button  variant='outlined'   onClick={() => history.push('/profile')}>Profile </Button>
            </ListItem>
  
            </List>
  
        <Divider />
      </Drawer>
      );
   }
  


export default SideNav;