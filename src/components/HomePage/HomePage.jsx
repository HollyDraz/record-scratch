import React from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios'
// mui imports 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';

function HomePage() {
const history = useHistory();

const bull = (
  <Box
    component="span"
    // sx={{width: 1/4,  height: '75%'}}
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)',}}
  >
    
  </Box>

);

const card = (

  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        SONG POST HERE :D
      </Typography>
    </CardContent>

    <CardActions>
    <Button onClick={() => history.push('/edit')}>Edit post</Button>
    <FavoriteIcon />
    </CardActions>
  </React.Fragment>
);


    return (
      <div className="container">
        <div>
          <h1>This is my header for record Scratch <br />
            
          </h1>
          <Box sx={{ minWidth: 275 }}>
          <Grid container spacing={0}> 
          <Card variant="outlined">{card}</Card>
          </Grid>
          </Box>

          <br />

          <Box sx={{ minWidth: 275 }}>
          <Grid container spacing={0}> 
          <Card variant="outlined">{card}</Card>
          </Grid>
          </Box>


          
        </div>
      </div>
    );
  }
  
  export default HomePage;