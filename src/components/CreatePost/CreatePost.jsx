import React from 'react';
import { useHistory } from 'react-router-dom';


function CreatePost() {
  const history = useHistory();



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
          
          </form>
        </div>
      </div>
    );
  }

  export default CreatePost;