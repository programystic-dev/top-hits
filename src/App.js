import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header.js';
import ListRoute from './routes/List/ListRoute.js';
import DetailsRoute from './routes/Details/DetailsRoute.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="page-wrapper">
        <Header />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={ListRoute}/>
          <Route path={`${process.env.PUBLIC_URL}/details/:id`} component={DetailsRoute} />}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
