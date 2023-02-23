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
import Container from '@mui/material/Container';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import { CssBaseline } from '@mui/material';

function PersonalProfile (){
  const history = useHistory();
  const [songList, setSongList] = useState([]);
  // Selectors and dispatch
  const song = useSelector (store => store.song);
  const dispatch = useDispatch();

  return (
    <div className='profile'>
      <CssBaseline />
      <Typography>Hello User </Typography>
      <br/>
      <br/>
      <Container>
        {/* add the spotify album here */}
        <Card>
          <CardContent>
            <p> AAAAAHHHHH </p>
          </CardContent>
        </Card>

      </Container>
    </div>
  )

}

 export default PersonalProfile;