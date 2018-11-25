import React from 'react';
import ListItem from '../ListItem/ListItem.js';
import PropTypes from 'prop-types';

const List = ({ list }) => (
  <div className="row">
    {list.map((item, index) => <ListItem item={item} index={index} key={index}/>)}
  </div>
)

List.propTypes = {
  list: PropTypes.array.isRequired,
}

export default List;
