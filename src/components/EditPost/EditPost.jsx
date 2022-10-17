import React from 'react';
import { useHistory } from 'react-router-dom';


function EditPost() {
  const history = useHistory();
    return (
      <div className="container">
        <div>
          <h1>This is a filler header
            <button>New Post</button>
            <button onClick={() => history.push('/homepage')}>Home Page</button>
            <button> DELETE </button>
          </h1>
        </div>
      </div>
    );
  }

  export default EditPost;