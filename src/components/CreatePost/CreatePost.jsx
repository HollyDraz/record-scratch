import React from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';

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
            <button onClick={() => history.push('/homepage')}>Home Page</button>
          </h1>
          <form onSubmit={createPost}>
          <input onChange={(e) => setNewTitle(e.target.value)} defaultValue={newTitle} type="text" name="song" placeholder='song' />
          <input onChange={(e) => setNewAlbum(e.target.value)} defaultValue={newAlbum} type="text" name="album" placeholder='album' />
          <input onChange={(e) => setNewArtist(e.target.value)} defaultValue={newArtist} type="text" name="artist" placeholder='artist' />
          <input onChange={(e) => setNewDescription(e.target.value)} defaultValue={newDescription} type="text" name="description" placeholder='description' />
          </form>
          <button onClick={createPost}>Publish</button>
        </div>
      </div>
    );
  }

  export default CreatePost;