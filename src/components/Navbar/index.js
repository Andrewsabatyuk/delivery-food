import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>PIZZA</NavLink>
        <NavIcon onClick={toggle}>
          <p>Меню</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
