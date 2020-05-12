import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';

import MainPage from './components/MainPage';
import Bio from './components/Bio';
import CharacterSheet from './components/CharacterSheet';



function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/bio" component={Bio} />
      <Route path="/charactersheet" component={CharacterSheet} />
      <Route
        path='/github'
        component={() => {
          window.location.href = "https://github.com/webbmaxwell";
          return null;
        }}
      />
    </Switch>
  );
}

export default App;
