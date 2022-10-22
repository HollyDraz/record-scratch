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
const dispatch = useDispatch();
const {id} = useParams();
// all my song details 
const [newTitle, setNewTitle] = useState('');
const [newArtist, setNewArtist] = useState('');
const [newAlbum, setNewAlbum] = useState('');
const [newDescription, setNewDescription] = useState('');
//const [newSong, setNewSong] = useState('');



  useEffect(() => {
    console.log('edit page', );
    //dispatch({type: 'UPDATE_SONG', payload: newSong });
   
  }, [] );
  

// new function to update the post 'update song'
// include dispatch to update song deets
// const new song  = { title: newTilte } 

const updateSong = () => {
    const newSong = {
      title: newTitle,
      artist: newArtist,
      album: newAlbum,
      description: newDescription
    }
    const dispatch = useDispatch();
    dispatch({type: 'UPDATE_SONG', payload: newSong });
    console.log('updated song', newSong) 
  }



    return (
      <div className="container">
        <div>
          <h1>Edit Post <br />
            <button onClick={() => history.push('/homepage')}>Home Page</button>
          <p>SONG: {JSON.stringify(song)}</p>
          </h1>
          <form >
            {/* on change handlers needed */}
            {/* onChange={updateSong(song)}  */}
          <input onChange={(e) => setNewTitle(e.target.value)} type="text" name="song" placeholder={song.title} /> 
          <input type="text" name="album" placeholder={song.album} />
          <input type="text" name="artist" placeholder={song.artist} />
          <input type="text" name="description" placeholder={song.description} />
          
          </form>
          <button onClick={() => updateSong()} >Publish</button> <br />
          
       
          <button>DELETE</button>
        </div>
      </div>
    );
  }

  export default EditPost;