import React, { Component } from 'react';
import { BackgroundScreen, Gif } from './GlobalStyle';

class App extends Component {
    render() {
      return <BackgroundScreen main><Gif></Gif></BackgroundScreen>
    }
}


export default App;