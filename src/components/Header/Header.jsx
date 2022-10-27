import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';
// MUI 
import { grey } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import AlbumIcon from '@mui/icons-material/Album';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';

function Header(){
    const history = useHistory();
    return(
        <div>
             <Typography align='center'><h1> Welcome To Record Scratch!</h1> <br /> </Typography>
             <Grid container direction="row" justifyContent="center" alignItems="flex-start" >
                {/* align buttons  */}
             <IconButton  size="large"  onClick={() => history.push('/info')}> About 
                <AlbumIcon sx={{ color: grey[900], fontSize: 100 }} ></AlbumIcon>
             </IconButton>

             <IconButton onClick={() => history.push('/create')}  size="large" > New Post  
                <AlbumIcon sx={{  fontSize: 100 }}></AlbumIcon>
             </IconButton>

             <IconButton  size="large"  onClick={() => history.push('/homepage')}> Homepage 
                <AlbumIcon sx={{ color: grey[900], fontSize: 100 }} ></AlbumIcon>
             </IconButton>

             <IconButton size="large" > Log Out 
                <AlbumIcon onClick={() => history.push('/login')} sx={{ color: red[900], fontSize: 100 }}></AlbumIcon>
             </IconButton>


             </Grid>
            


        </div>
    )

}

export default Header;