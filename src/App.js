import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header.js';
import ListRoute from './routes/List/ListRoute.js';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <ListRoute />
      </div>
    );
  }
}

export default App;
