import React from 'react';
import ReactDOM from 'react-dom';
// import { Drizzle, generateStore } from 'drizzle';
import { BackgroundScreen, Gif } from './GlobalStyle';

const mainElement = <BackgroundScreen main><Gif></Gif></BackgroundScreen>;
ReactDOM.render(mainElement, document.getElementById('root'));
