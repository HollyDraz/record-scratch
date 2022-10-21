import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';



function EditPost() {
  const store = useSelector(store => store);//give the entire store
  const history = useHistory();
  //selectors and dispatch
  const song = useSelector (store => store.selectedSong);
  //test to see if I can get title to appear first 
  const dispatch = useDispatch();
  const {id} = useParams();



  useEffect(() => {
    console.log('edit page', song);
   
  }, [] );
  

  // new function to update the post 'update song'
  // include dispatch to update song deets
  // const new song  = { title: newTilte } 

  const updateSong = (song) => {
    newSong = {
      title: newTitle,
      artist: newArtist,
      album: newAlbum,
      description: newDescription
    }
    dispatch({type: 'UPDATE_SONG', payload: song});
    console.log('test the updated song', newSong );


    //add an alert here to let user know song was updated
  }




//new value created 
//const newTitle = 
// 



    return (
      <div className="container">
        <div>
          <h1>Edit Post <br />
            <button onClick={() => history.push('/homepage')}>Home Page</button>
            {/* <p>SONG: {JSON.stringify(song)}</p> */}
          </h1>
          <form >
            {/* on change handlers needed */}
          <input  type="text" name="song" placeholder={song.title} /> 
          <input type="text" name="album" placeholder={song.album} />
          <input type="text" name="artist" placeholder={song.artist} />
          <input type="text" name="description" placeholder='description' />
          </form>
          <button>Publish</button> <br />
       
          <button>DELETE</button>
        </div>
      </div>
    );
  }

  export default EditPost;