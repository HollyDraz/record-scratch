import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios'
//
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';

function PersonalProfile (){
  const history = useHistory();
  const [songList, setSongList] = useState([]);
  // Selectors and dispatch
  const song = useSelector (store => store.song);
  const dispatch = useDispatch();

  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center">
    <Box>
      <Card>
        <CardContent>
        <p> Testing box</p>
        </CardContent>
      </Card>
    </Box>
    </Grid>
  )

}

 export default PersonalProfile;