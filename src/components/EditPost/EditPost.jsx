import React from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';



function EditPost() {
  const  store = useSelector(store => store);//give the entire store
  const history = useHistory();
  const dispatch = useDispatch();
  const [editTitle, setNewTitle] = useState();
  const [editArtist, setNewArtist] = useState();
  const [editAlbum, setNewAlbum] = useState();
  const [editDescription, setNewDescription] = useState();


//when edit button is clicked it populates the information for the post via id 


    return (
      <div className="container">
        <div>
          <h1>Edit Post <br />
            <button onClick={() => history.push('/homepage')}>Home Page</button>
          </h1>
          <form >
          <input type="text" name="song" placeholder='song' />  {/*//selected song . artist */}
          <input type="text" name="album" placeholder='album' />
          <input type="text" name="artist" placeholder='artist' />
          <input type="text" name="description" placeholder='description' />
          </form>
          <button>Publish</button> <br />
       
          <button>DELETE</button>
        </div>
      </div>
    );
  }

  export default EditPost;