import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
const history = useHistory();

    return (
      <div className="container">
        <div>
          <h1>This is my header for record Scratch <br />
            <button onClick={() => history.push('/create')}>New Post</button>
          </h1>
          
        </div>
      </div>
    );
  }
  
  export default HomePage;