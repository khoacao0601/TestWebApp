import React from 'react';
import '../css/navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    const windowSize = window.innerWidth;
    if (windowSize === 375) {
      return (
        <nav role="navigation">
          <div className="title"><a className="active" href="#home">Test Web<i className="fas fa-check"></i></a></div>
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Info</li></a>
              <a href="#"><li>Contact</li></a>
              <a href="https://erikterwan.com/" target="blank"><li>Show me more</li></a>
            </ul>
          </div>
        </nav>
      );
    } else {
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

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div>
        {this.handleResize()}
      </div>
    );
  }
}

export default NavBar;
