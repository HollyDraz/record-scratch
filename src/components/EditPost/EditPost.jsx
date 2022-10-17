import React from 'react';


function EditPost() {
    return (
      <div className="container">
        <div>
          <h1>This is a filler header
            <button>New Post</button>
            <button onClick={() => history.push('/homepage')}>Home Page</button>
          </h1>
        </div>
      </div>
    );
  }

  export default EditPost;