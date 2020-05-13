import React from 'react';
import { Route } from 'react-router-dom';

function ExternalRoutes() {
  return (
    <div>
      <Route
        path='/github'
        component={() => {
          window.location.href = "https://github.com/webbmaxwell";
          return null;
        }}
      />
      <Route
        path='/facebook'
        component={() => {
          window.location.href = "https://www.facebook.com/maxwell.webb.5?ref=bookmarks";
          return null;
        }}
      />
      <Route
        path='/linkedin'
        component={() => {
          window.location.href = "https://www.linkedin.com/in/maxwell-webb/";
          return null;
        }}
      />
    </div>
  )
};

export default ExternalRoutes;
