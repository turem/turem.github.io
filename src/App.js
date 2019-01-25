import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

class App extends Component {
  static defaultProps = {
    bottomBorderWidth: 3,
    headerHeight: 200,
    fadeInDistance: 50
  };

  constructor(props) {
    super(props);
    this.state = { navOpacity: 0 };
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateNavOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavOpacity);
  }

  updateNavOpacity() {
    const navbarHeight = 100; // Bootstrap default
    const { bottomBorderWidth, headerHeight, fadeInDistance } = this.props;
    const endFade = headerHeight - navbarHeight - bottomBorderWidth;
    const startFade = endFade - fadeInDistance;
    const scrolly = window.scrollY;

    if (scrolly < startFade) {
      if (this.state.opacity === 0) return;
      this.setState({ navOpacity: 0 });
      return;
    }

    if (scrolly > endFade) {
      if (this.state.opacity === 1) return;
      this.setState({ navOpacity: 1 });
      return;
    }

    const pxPastStartFade = scrolly - startFade;
    const navOpacity = pxPastStartFade / (endFade - startFade);
    this.setState({ navOpacity });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar opacity={ this.state.navOpacity } borderBottomWidth={ this.props.bottomBorderWidth } />
          <Header height={ this.props.headerHeight } borderBottomWidth={ this.props.bottomBorderWidth } />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
