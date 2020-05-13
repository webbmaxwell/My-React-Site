import React from 'react';
import Links from './Links.js';
import { Icon } from 'semantic-ui-react';


function MainPage() {
  return (
    <div className="App">
      <div className="Body">
        <h1 className="Title">Max Webb</h1>
        <h3 className="Subtitle">Welcome to My Site</h3>
        <Links />
      </div>
    </div>
  );
}

export default MainPage;
