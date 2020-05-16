import React from 'react';
import { Icon } from 'semantic-ui-react';

import Icons from './Icons.js';
import NavBar from './NavBar.js';

function MainPage() {
  return (
    <div className="App">
      <div className="Header">
        <NavBar />
      </div>
      <div className="Body">
        <h1 className="Main-title">Max Webb</h1>
        <Icons />
      </div>
    </div>
  );
}

export default MainPage;
