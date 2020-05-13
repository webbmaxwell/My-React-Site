import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

function Links() {
  return (
    <div>
      <Link to="/github" target="_blank">
        <Icon name='github' />
      </Link>
      <Link to="/facebook" target="_blank">
        <Icon name='facebook' />
      </Link>
      <Link to="/linkedin" target="_blank">
        <Icon name='linkedin' />
      </Link>
      <Link to="/charactersheet">
        <Icon name="d and d" />
      </Link>
    </div>
  )
}

export default Links;
