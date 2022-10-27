import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios'
// mui imports 
//move this card into its own components 
//once base mode is complete
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';




function HomePage() {
const history = useHistory();
const [songList, setSongList] = useState([]);
 //selectors and dispatch
const song = useSelector (store => store.song);
//test to see if I can get title to appear first 
const dispatch = useDispatch();
const {id} = useParams();


  const handleSong = (song) => {
    console.log('song  test', song);
    dispatch({type: 'SET_SONG', payload: song});
    console.log('song title test', song.title);
    history.push('/edit')
  }


useEffect(() => {
  console.log('page load');
  fetchSongs()
  //handleTitle()
}, [id]);



const fetchSongs = () => {
    console.log('in fetch songs');
    axios.get('/api/song')
        .then(response => {
            console.log(response.data);
            setSongList(response.data);
        })
        .catch(error => {
            console.log(error);
            alert('Something went wrong fetching your songs.');
        });
}


const bull = (
  <Box
    component="span"
    // sx={{width: 1/4,  height: '75%'}}
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)',}}
  >
    
  </Box>

);


    return (
      <div className="container">
        <div>
          <Typography align='center'><h1> Welcome To Record Scratch!</h1> <br />
          <Button sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black',  }} variant="contained" onClick={() => history.push('/create')}>Create Post</Button> <br/>
          </Typography>
          <br />
          {/* <Button variant="outlined" onClick={() => history.push('/profile')}>profile</Button> */}
         
          
          <Box sx={{ minWidth: 300 }}>
          <Grid 
           container
           direction="column"
           justifyContent="space-between"
           alignItems="center"
          
          > 
          
          {songList.map (song => {
            console.log('song list', songList);
            return<div key={song.id}>
              <Card variant="contained" sx={{border: "10px  maroon double ",  borderRadius: "10px" }}>
                <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                          <h3>{song.title} <br/> </h3>
                          artist: {song.artist} <br />
                          album: {song.album} <br />
                          description: {song.description}
                         </Typography>   
                          <CardActions >
                          <Button sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black', '&: hover': {backgroundColor: '#c4dce5'}  }} variant="contained" onClick={() => handleSong(song)}>Edit post</Button>
                          {/* <FavoriteIcon /> */}
                          </CardActions>
                </CardContent>
              </Card>
              <br />
            </div>
          })}
          </Grid>
          </Box>
          <br />

      


          
        </div>
      </div>
    );
  }
  
  export default HomePage;