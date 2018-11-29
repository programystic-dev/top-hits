import React from 'react';
import List from './components/List/List.js';

const ListRoute = ({list}) => (
  <div className="container">
    <List list={list}/>
  </div>
)

export default ListRoute;
