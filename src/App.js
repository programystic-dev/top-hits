import React, { Component } from 'react';
import './App.scss';
import fetchHits from './api/api.js';
import Header from './components/Header/Header.js';
import List from './components/List/List.js';
import Loader from './components/Loader/Loader.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetchHits().then(result => {
        this.setState({
          hits: result.feed.entry,
          isLoading: false})
        }).catch(err => console.log(err))
      }, 2000);
  }

  render() {
    const { hits, isLoading } = this.state;
    return (
      <div className="page-wrapper">
        <Header />

        <div className="container">
          {isLoading ? (
            <Loader />
          ) : (
            <List list={hits}/>
          )
          }
        </div>

      </div>
    );
  }
}

export default App;
