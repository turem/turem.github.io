import React from 'react'

const Header = (props) => (
    <div className="header" style={{ height: props.height, borderBottomWidth: props.borderBottomWidth }}>
      <div className="name">Welcome to my website!</div>
      <div className="links">
        <a href="/">Home</a>
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