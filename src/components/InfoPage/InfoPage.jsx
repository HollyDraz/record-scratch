import React from 'react';
import { Typography } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      
      <Typography align='center'><h1>Built with:</h1></Typography>
      <Typography align='center'>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Sagas</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Material UI</li>
      </Typography>
      <Typography align='center'> <h1>Whats Next?</h1> 
        <p> My plans for this project would be to allow the user to link their song data from popular apps like Spotify or Apple</p>
      </Typography>

      <Typography align='center'> <h1>Special thanks:</h1> 
      <p> Thanks to all my friends, family, and loved ones. 
        <br />Special thanks to Prime Digital Academy and Chris Black for providing me the skills to achieve this. 
        <br/> My mentors, and my dog Dash.   </p>
      
      </Typography>
    </div>
  );
}

export default InfoPage;
