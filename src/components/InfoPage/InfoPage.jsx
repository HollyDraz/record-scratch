import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      
      <h1>Built with:</h1>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Sagas</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Material UI</li>
      </ul>
      <h1>Whats Next?</h1>
      <ul>
        <p>My next goal would to implement the use of a personal profile that would allow the user to see all their posts and see  any posts that they saved from other users</p>

      </ul>
      <h1> Special Thanks to:</h1>
      <p> All friends, family, prime staff, and my dog Dash  </p>
    </div>
  );
}

export default InfoPage;
