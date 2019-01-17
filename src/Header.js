import React from 'react'
require('./css/navbar.css');

const Header = (props) => (
    <div className="header" style={{ height: props.height, borderBottomWidth: props.borderBottomWidth }}>
      <div className="name"><h1>Welcome to my website!</h1></div>
      {/* <div className="description">Bleeding Edge VR Blockchain Solutions</div> */}
      <div className="links">
        <a href="/about">About Me</a>
        <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
        <a href="/learning">Learning Programming</a>
        <a href="/hobbies">Other Hobbies</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );

  export default Header