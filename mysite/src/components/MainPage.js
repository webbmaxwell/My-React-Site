import React from 'react';
import { Link } from 'react-router-dom';


function MainPage() {
  return (
    <div className="App">
      <div className="Body">
        <h1 className="Title">Max Webb</h1>
        <h3 className="Subtitle">Welcome to My Site</h3>
        <Link to="github">github</Link>
      </div>
    </div>
  );
}

export default MainPage;
