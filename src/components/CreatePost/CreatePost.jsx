import React from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';
//mui 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'




function CreatePost() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState();
  const [newArtist, setNewArtist] = useState();
  const [newAlbum, setNewAlbum] = useState();
  const [newDescription, setNewDescription] = useState();






  const createPost = ( ) => {
    console.log('in create post', newTitle, newArtist, newArtist, newAlbum);
  
    axios({
      method: 'POST',
      url: 'api/song',
      data: {
        title: newTitle,
        artist: newArtist,
        album: newAlbum,
        description: newDescription
      }
    }).then((response) => {
      alert('new song created')
      history.push('/homepage')
      console.log(response);
    }).catch(error => {
      console.log('error in create post', error);
    })
  }


    return (
      <div className="container">
        <div>
          <h1>Create Post </h1>
          <Grid
            container
            direction="column"
            justifyContent="center"
           alignItems="center"
          >
          <Box>
          <Paper>
          <Card sx={{border: "10px  maroon double ",  borderRadius: "10px" }}>
          <CardContent>
           
          <form onSubmit={createPost}>
          Title: <TextField label='title' onChange={(e) => setNewTitle(e.target.value)} defaultValue={newTitle} type="text" name="song" placeholder='song' /> <br />
          Album: <TextField label='album'  onChange={(e) => setNewAlbum(e.target.value)} defaultValue={newAlbum} type="text" name="album" placeholder='album' /> <br />
          Artist: <TextField label='artist'  onChange={(e) => setNewArtist(e.target.value)} defaultValue={newArtist} type="text" name="artist" placeholder='artist' /> <br />
          Description: <TextField label='description'    multiline
          rows={4} onChange={(e) => setNewDescription(e.target.value)} defaultValue={newDescription} type="text" name="description" placeholder='description' />
          </form>
          <CardActions>
          <Button variant='contained' onClick={() => history.push('/homepage')}>Home Page</Button>
          <Button variant='contained' onClick={createPost}>Publish</Button>
          </CardActions>
          </CardContent>
          </Card>
          </Paper>
          </Box>
          </Grid>
        </div>
      </div>
    );
  }

  export default CreatePost;