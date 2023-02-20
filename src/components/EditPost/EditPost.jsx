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
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';


function EditPost() {
const store = useSelector(store => store);
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
    alert(`your post was deleted, hope that wasn't important!`);
    history.push('/homepage');
  }).catch((error) => {
    console.log(error);
    alert('Something went wrong!')
  })
}


    return (
      <div className="container">
        <div>
        <Typography align='center'><h1> Edit Post</h1>  </Typography>
        {/* used to test the new data being added */}
          {/* //<p>SONG: {JSON.stringify(song)}</p> */}
          <Grid container direction="column" justifyContent="center" alignItems="center">
          <Box>
          <Paper>
          <Card variant="outlined" sx={{border: "10px  maroon double ",  borderRadius: "10px" }}>
          <CardContent sx={{}} >
          <form >
           <b>Title: </b> <TextField fullWidth label={song.title} onChange={(e) => setNewTitle(e.target.value)} type="text" name="song" placeholder={song.title} /> <br/>
           <b>Album: </b> <TextField fullWidth label={song.album} onChange={(e) => setNewAlbum(e.target.value)} type="text" name="album" placeholder={song.album} /> <br/>
           <b>Artist: </b> <TextField fullWidth label={song.artist} onChange={(e) => setNewArtist(e.target.value)} type="text" name="artist" placeholder={song.artist} /> <br/>
          <b>Description: </b> <TextField fullWidth label={song.description} multiline rows={4} onChange={(e) => setNewDescription(e.target.value)} type="text" name="description" placeholder={song.description} />
          </form>
          <CardActions>
          <Button sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black'  }} variant='contained' onClick={() => updateSong()} >Publish</Button> <br />
          <Button sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black' }} variant="contained" onClick={() => history.push('/homepage')}>Home Page</Button>
          <Button variant="contained" onClick={() => deleteSong()} color='error'>DELETE</Button>
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

  export default EditPost;