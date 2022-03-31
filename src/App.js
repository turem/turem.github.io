import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Learning from './components/Learning'
import BubbleSorting from './components/Sorting1'

class App extends Component {
  static defaultProps = {
    bottomBorderWidth: 3,
    headerHeight: 150,
    fadeInDistance: 10
  };

  constructor(props) {
    super(props);
    this.state = {
      navOpacity: 0,
      headerHeight: this.props.headerHeight,
    };
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateNavOpacity);
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavOpacity);
  }

  updateDimensions = () => {
    if (window.innerHeight < window.innerWidth)
      this.setState({
        headerHeight: this.props.headerHeight
      })
    else
      this.setState({
        headerHeight: 0.6 * this.props.headerHeight
      })
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
      <div className="App">
        {/* <Navbar opacity={this.state.navOpacity} borderBottomWidth={this.props.bottomBorderWidth} />
        <Header height={this.state.headerHeight} borderBottomWidth={this.props.bottomBorderWidth} />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/learning' component={Learning} />
        <Route path='/sorting1' component={BubbleSorting} /> */}
      </div>
    );
  }
}

export default App;
