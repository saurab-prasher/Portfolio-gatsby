import * as React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
const NavMenu = styled.nav`
  background-color: #eee;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 1.2rem;
`;

const linkStyle = {
  textDecoration: "none",
  color: "blue",
  textDecoration: "none",
};
const Navbar = () => {
  return (
    <NavMenu>
      <NavList>
        <li>
          <Link style={linkStyle} to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </NavList>
    </NavMenu>
  );
};

export default Navbar;
