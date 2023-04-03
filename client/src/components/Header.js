import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      <img  className="logo" src="./images/logo1.png" alt="my logo image" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 6.5rem;
  ${'' /* background-color: #E0B0FF; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${'' /* position: relative; */}
  position: -webkit-sticky;
  position:sticky;
  top:0;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
 .logo {
    width:15rem;
    height: 6rem;
    border-radius: 70px;
  }
`;

export default Header;