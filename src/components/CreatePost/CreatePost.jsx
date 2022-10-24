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
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';


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
      console.log(response);
    }).catch(error => {
      console.log('error in create post', error);
    })
  }


    return (
      <div className="container">
        <div>
          <h1>Create Post <br />
            
          </h1>
          <Box>
            <Card>
              <CardContent>
           
          <form onSubmit={createPost}>
          <input onChange={(e) => setNewTitle(e.target.value)} defaultValue={newTitle} type="text" name="song" placeholder='song' /> <br />
          <input onChange={(e) => setNewAlbum(e.target.value)} defaultValue={newAlbum} type="text" name="album" placeholder='album' /> <br />
          <input onChange={(e) => setNewArtist(e.target.value)} defaultValue={newArtist} type="text" name="artist" placeholder='artist' /> <br />
          <input onChange={(e) => setNewDescription(e.target.value)} defaultValue={newDescription} type="text" name="description" placeholder='description' />
          </form>
          <CardActions>
          <Button variant='contained' onClick={() => history.push('/homepage')}>Home Page</Button>
          <Button variant='contained' onClick={createPost}>Publish</Button>
          </CardActions>
          </CardContent>
          </Card>
          </Box>
        </div>
      </div>
    );
  }

  export default CreatePost;