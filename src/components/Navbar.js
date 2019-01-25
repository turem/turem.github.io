import React from 'react'
require('../css/navbar.css');

const Navbar = (props) => {
    const opacity = (props.opacity) ? Math.max(props.opacity, 0.2) : 0;
    const borderBottomWidth = (props.opacity === 1) ? props.borderBottomWidth : 0;
  
    return (
      <div className="navbar navbar-default navbar-static-top" role="navigation" style={{ opacity, borderBottomWidth }}>
        <div className="container">
            <a href="/" className="navbar-brand">Home</a>
            </div>
            <div className="collapse navbar-collapse" id="nav-id">
                <div className="links">
                    <a href="/about">About Me</a>
                    <a href="/experience">Experience</a>
                    <a href="/projects">Projects</a>
                    <a href="/learning">Learning Programming</a>
                    <a href="/hobbies">Other Hobbies</a>
                    <a href="/contact">Contact</a>
                </div>
        </div>
    </div>
    );
  };

export default Navbar