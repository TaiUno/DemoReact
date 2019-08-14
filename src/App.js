import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Slideshow from './components/slideshow/slideshow';
import img1 from './images/01.png';
import img2 from './images/02.png';
import img3 from './images/03.png';
import img4 from './images/04.png';

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
  { src: img4, caption: "Caption four" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`manual`}
        />

        <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`3000`}
        />

        <div>
          Made by <a href="https://about.phamvanlam.com/">Lam Pham</a>.
          Visit me at <a href="/">completejavascript.com</a>.
        </div>
      </div>
    );
  }
}

export default App;
