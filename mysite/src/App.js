import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import MainPage from './components/MainPage';
import Bio from './components/Bio';
import CharacterSheet from './components/CharacterSheet';
import ExternalRoutes from './components/ExternalRoutes';



function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/bio" component={Bio} />
      <Route path="/charactersheet" component={CharacterSheet} />
      <ExternalRoutes />
    </Switch>
  );
}

export default App;
