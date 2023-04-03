import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function ErrorPage() {
  return (
    <Wrapper>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry,Page not found</h2>
          <p className="mb-5">
            The page you are looking for might have been removed has it's name
            change or is temporarily unavailable.
          </p>
          <NavLink to="/">Back to Home</NavLink>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  #notfound {
    position: relative;
    height: 50vh;
  }
  
  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  
  .notfound {
    max-width: 920px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .notfound .notfound-404 {
    position: absolute;
    height: 100px;
    top: 0;
    left: 50%;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
    z-index: -1;
  }
  
  .notfound .notfound-404 h1 {
    font-family: 'Maven Pro', sans-serif;
    color: #ececec;
    font-weight: 900;
    font-size: 276px;
    margin: 0px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  
  .notfound h2 {
    font-family: 'Maven Pro', sans-serif;
    color: #000;
    font-weight: 900;
    font-size: 46px;
    text-transform: uppercase;
    margin: 0px;
  }
  
  .notfound p {
    font-family: 'Maven Pro', sans-serif;
    color: #000;
    font-weight: 400;
    font-size: 16px;
    ${'' /* text-transform: uppercase; */}
    margin-top: 15px;
  }
  
  .notfound a {
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    background-color: #7F00FF;
    display: inline-block;
    padding: 13px 35px;
    border: 2px solid transparent;
    -webkit-transform: 0.2s all;
    transition: 0.2s all;
  }
  
  .notfound a:hover {
    background-color: #fff;
    border-color: #7F00FF;
    color: #7F00FF;
  }
`;

export default ErrorPage;