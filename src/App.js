import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import fetchHits from './api/api.js';
import './App.scss';
import Header from './components/Header/Header.js';
import Error from './components/Error/Error.js';
import Loader from './components/Loader/Loader.js';
import ListRoute from './routes/List/ListRoute.js';
import DetailsRoute from './routes/Details/DetailsRoute.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: true,
      error: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetchHits().then(result => {
        this.setState({
          hits: result.feed.entry,
          isLoading: false })
        }).catch(err => {
          this.setState({
            error: true,
            isLoading: false });
        })
      }, 1000);
  }

  render() {
    const { error, isLoading, hits } = this.state;
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="page-wrapper">
        <Header />
        { error &&
          <Error />
        }

        { isLoading ? (
          <Loader />
        ) : (
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={props => <ListRoute list={hits}/>} />
            <Route path={`${process.env.PUBLIC_URL}/details/:id`} component={DetailsRoute} />} />
          </Switch>
        )}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
