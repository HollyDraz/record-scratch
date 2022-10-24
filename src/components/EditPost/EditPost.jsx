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
import { TextField } from '@mui/material';


function EditPost() {
const store = useSelector(store => store);//give the entire store
const history = useHistory();
//selectors and dispatch
const song = useSelector (store => store.selectedSong);
const dispatch = useDispatch();
const {id} = useParams();
// all my default song details 
const [newTitle, setNewTitle] = useState(' x ');
const [newArtist, setNewArtist] = useState('x ');
const [newAlbum, setNewAlbum] = useState(' x ');
const [newDescription, setNewDescription] = useState(' x ');




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
          alert('your post was updated!');
          history.push('/homepage')
      }).catch((error) => {
          console.log(error);
          alert('Something went wrong in update song!');
      });
};

//new function to delete a selected post 
const deleteSong = () => {
  axios({
    method: 'DELETE',
    url: `/api/song/delete/${song.id}`
  }).then((response) => {
    alert('your post was delete!');
    history.push('/homepage');
  }).catch((error) => {
    console.log(error);
    alert('Something went wrong!')
  })
}


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
          <TextField
          label={song.title}
           onChange={(e) => setNewTitle(e.target.value)} type="text" name="song" placeholder={song.title} /> <br/>
          <TextField
          label={song.album}
           onChange={(e) => setNewAlbum(e.target.value)} type="text" name="album" placeholder={song.album} /> <br/>
          <TextField
          label={song.artist}
           onChange={(e) => setNewArtist(e.target.value)} type="text" name="artist" placeholder={song.artist} /> <br/>
          <TextField 
          label={song.description}
          multiline
          rows={4}
          onChange={(e) => setNewDescription(e.target.value)} type="text" name="description" placeholder={song.description} />
          
          </form>
          <CardActions>
          <Button variant='contained' onClick={() => updateSong()} >Publish</Button> <br />
          <Button variant="contained" onClick={() => history.push('/homepage')}>Home Page</Button>
          <Button variant="contained" onClick={() => deleteSong()} color='error'>DELETE</Button>
          </CardActions>
          </CardContent>
          </Card>
          </Box>
        </div>
      </div>
    );
  }

  export default EditPost;