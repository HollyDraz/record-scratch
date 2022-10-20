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


  const createPost = (title, artist, album, description ) => {
    console.log('in create post', title, artist, album, description);
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
          <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type="text" name="song" placeholder='song' />
          <input onChange={(e) => setNewAlbum(e.target.value)} value={newAlbum} type="text" name="album" placeholder='album' />
          <input onChange={(e) => setNewArtist(e.target.value)} value={newArtist} type="text" name="artist" placeholder='artist' />
          <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type="text" name="description" placeholder='description' />
          </form>
          <button type="submit">Publish</button>
        </div>
      </div>
    );
  }

  export default CreatePost;