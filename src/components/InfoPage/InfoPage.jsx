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
    </div>
  );
}

export default InfoPage;
