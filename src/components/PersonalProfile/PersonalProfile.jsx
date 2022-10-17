import React from 'react';
import { useHistory } from 'react-router-dom';

function PersonalProfile() {
  const history = useHistory();
    return (
      <div className="container">
        <div>
          <h1>This is a filler header
            <button onClick={() => history.push('/create')}>New Post</button>
            <button onClick={() => history.push('/homepage')}>Home Page</button>
           
          </h1>
        </div>
      </div>
    );
  }

  export default PersonalProfile;