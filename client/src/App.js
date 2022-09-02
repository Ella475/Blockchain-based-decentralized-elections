import React, { Component } from 'react';
import { BackgroundScreen, Gif } from './GlobalStyle';

class App extends Component {
    state = { loading: true, drizzleState: null };

    render() {
      return <BackgroundScreen main><Gif></Gif></BackgroundScreen>
    }

    componentDidMount() {
        const { drizzle } = this.props;
    
        this.unsubscribe = drizzle.store.subscribe(() => {
          const drizzleState = drizzle.store.getState();
          if (drizzleState.drizzleStatus.initialized) {
            this.setState({ loading: false, drizzleState }, () => {});
          }
        });
      }
    
      componentWillUnmount() {
        this.unsubscribe();
      }
}


export default App;