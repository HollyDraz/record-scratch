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
        title: title,
        artist: artist,
        album: album,
        description: description
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
          <form>
          <input type="text" name="song" placeholder='song'/>
          <input type="text" name="album" placeholder='album'/>
          <input type="text" name="artist" placeholder='artist' />
          <input type="text" name="description" placeholder='description' />
          </form>
          <button onClick={() => createPost}>Publish</button>
        </div>
      </div>
    );
  }

  export default CreatePost;