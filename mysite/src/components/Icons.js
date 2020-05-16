import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

function Icons() {
  return (
    <div>
      <Link to="/github" target="_blank">
        <Icon className="Icon" name='github' />
      </Link>
      <Link to="/facebook" target="_blank">
        <Icon className="Icon" name='facebook' />
      </Link>
      <Link to="/linkedin" target="_blank">
        <Icon className="Icon" name='linkedin' />
      </Link>
    </div>
  )
}

export default Icons;
