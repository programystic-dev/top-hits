import React, { Component } from 'react';
import './App.scss';
import ListItem from './components/ListItem/ListItem.js';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">

        <div className="container">
          <h1>Top 100 Music Hits</h1>
        </div>

        <div className="container">
          <div className="row">
            <ListItem />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
