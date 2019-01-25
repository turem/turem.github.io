import React, { Component } from 'react';
require('../css/main.css');
require('../css/slideshow.css');


class Home extends Component {
  render() {
    return (
      
      <div className="Home">
        <header className="Home-header" >
        <div id="main-content">
            <div id="home"></div>

            <div id="about">
                <h2>About Me</h2>
            </div>

            <div id="projects">
                <h2>Home Projects</h2>
            </div>

            <div id="hobbies">
                <h2>Hobbies</h2>
            </div>

            <div id="contact">
                <h2>Contact</h2>
            </div>

            <div id="contact">
                <h2>Contact</h2>
            </div>

            <div id="contact">
                <h2>Contact</h2>
            </div>

            <div id="contact">
                <h2>Contact</h2>
            </div>
          
        </div>
        </header>
      </div>
    );
  }
}

export default Home;
