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
const [songList, setSongList] = useState([]);

//function to select the song to be edited 
const editSong = (song) => {
  console.log('tesing edit song');

}


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

useEffect(() => {
    console.log('page load');
    fetchSongs()
}, []);

const bull = (
  <Box
    component="span"
    // sx={{width: 1/4,  height: '75%'}}
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)',}}
  >
    
  </Box>

);



// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//       {songList.map (song => {
//             console.log('song list', songList);
//             return<div key={song.id}>
//               song: {song.title} <br />
//               artist: {song.artist} <br />
//               album: {song.album} <br />
//               description: {song.description}

//             </div>
//           })}
//       </Typography>
//     </CardContent>

//     <CardActions>
//     <Button onClick={() => history.push('/edit')}>Edit post</Button>
//     <FavoriteIcon />
//     </CardActions>
//   </React.Fragment>
// );


    return (
      <div className="container">
        <div>
          <h1>Welcome To Record Scratch! <br />
          <Button variant="outlined" onClick={() => history.push('/create')}>Create Post</Button>
      
          </h1>
          <Box sx={{ minWidth: 300 }}>
          <Grid container spacing={0}> 
          
          {songList.map (song => {
            console.log('song list', songList);
            return<div key={song.id}>
              <Card variant="outlined">
                <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                          song: {song.title} <br />
                          artist: {song.artist} <br />
                          album: {song.album} <br />
                          description: {song.description}
                         </Typography>   
                          <CardActions>
                            <Button variant="outlined" onClick={() => history.push('/edit')}>Edit post</Button>
                            <FavoriteIcon />
                          </CardActions>
                </CardContent>
              </Card>
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