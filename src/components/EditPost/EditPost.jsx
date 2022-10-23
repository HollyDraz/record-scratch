import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
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


function EditPost() {
const store = useSelector(store => store);//give the entire store
const history = useHistory();
//selectors and dispatch
const song = useSelector (store => store.selectedSong);
const dispatch = useDispatch();
const {id} = useParams();
// all my song details 
const [newTitle, setNewTitle] = useState('yeet');
const [newArtist, setNewArtist] = useState('x ');
const [newAlbum, setNewAlbum] = useState(' x ');
const [newDescription, setNewDescription] = useState(' x ');
//const [newSong, setNewSong] = useState('');



  useEffect(() => {
    console.log('edit page', );
    //dispatch({type: 'UPDATE_SONG', payload: newSong });
   
  }, [] );
  

// new function to update the post 'update song'
// include dispatch to update song deets
// const new song  = { title: newTilte } 

const updateSong = (event) => {
  //event.preventDefault()
  console.log('In update song ');
  axios.put(`/api/song/${song.id}`, 
  { 
    title: newTitle,
    artist: newArtist,
    album: newAlbum,
    description: newDescription

  })
      .then(() => {
          dispatch({ type: 'UPDATE_SONG'});
          alert('your post was updated!');
          history.push('/homepage')
      }).catch((error) => {
          console.log(error);
          alert('Something went wrong in update song!');
      });
};

    return (
      <div className="container">
        <div>
          <h1>Edit Post
          {/* //<p>SONG: {JSON.stringify(song)}</p> */}
          </h1>
          <Box>
          <Card variant="outlined">
          <CardContent>
          <form >
          <input onChange={(e) => setNewTitle(e.target.value)} type="text" name="song" placeholder={song.title} /> <br/>
          <input onChange={(e) => setNewAlbum(e.target.value)} type="text" name="album" placeholder={song.album} /> <br/>
          <input onChange={(e) => setNewArtist(e.target.value)} type="text" name="artist" placeholder={song.artist} /> <br/>
          <input onChange={(e) => setNewDescription(e.target.value)} type="text" name="description" placeholder={song.description} />
          
          </form>
          <CardActions>
          <Button variant='contained' onClick={() => updateSong()} >Publish</Button> <br />
          <Button variant="contained" onClick={() => history.push('/homepage')}>Home Page</Button>
          <Button variant="contained" color='error'>DELETE</Button>
          </CardActions>
          </CardContent>
          </Card>
          </Box>
        </div>
      </div>
    );
  }

  export default EditPost;