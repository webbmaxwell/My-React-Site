import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {

  const Nav = styled.nav`
    padding-left: .3rem;
  `

  return (
    <div>
      <NavLink to="/">
        <Nav>Home</Nav>
      </NavLink>
      <NavLink to="/bio">
        <Nav>Bio</Nav>
      </NavLink>
      <NavLink to="/charactersheet">
        <Nav>Character Sheet</Nav>
      </NavLink>
    </div>
  )
};

export default NavBar;
