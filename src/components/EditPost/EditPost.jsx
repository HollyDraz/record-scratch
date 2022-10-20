import React from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';



function EditPost() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [editTitle, setNewTitle] = useState();
  const [editArtist, setNewArtist] = useState();
  const [editAlbum, setNewAlbum] = useState();
  const [editDescription, setNewDescription] = useState();


 
  


    return (
      <div className="container">
        <div>
          <h1>Edit Post <br />
            <button onClick={() => history.push('/homepage')}>Home Page</button>
          </h1>
          <form >
          <input onChange={(e) => setNewTitle(e.target.value)} defaultValue={editTitle} type="text" name="song" placeholder='song' />
          <input onChange={(e) => setNewAlbum(e.target.value)} defaultValue={editArtist} type="text" name="album" placeholder='album' />
          <input onChange={(e) => setNewArtist(e.target.value)} defaultValue={editAlbum} type="text" name="artist" placeholder='artist' />
          <input onChange={(e) => setNewDescription(e.target.value)} defaultValue={editDescription} type="text" name="description" placeholder='description' />
          </form>
          <button>Publish</button>
        </div>
      </div>
    );
  }

  export default EditPost;