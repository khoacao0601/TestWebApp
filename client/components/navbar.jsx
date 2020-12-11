import React from 'react';
import '../css/navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <ul className="nav">
        <div className="title"><a className="active" href="#home">Test Web<i className="fas fa-check"></i></a>
        </div>
        <div className="options">
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#test">Practice Test</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </div>
      </ul>
    );
  }
}

export default NavBar;
