import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './DetailsRoute.module.scss';
import Avatar from './../../components/Avatar/Avatar.js';
import Button from './../../components/Button/Button.js';

class DetailsRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      dataLoaded: false,
    }
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      const { data } = this.props.location.state;
      this.setState({data: data, dataLoaded: true})
    }
  }

  render() {
    const { data, dataLoaded } = this.state;
    return(
      <div className="container">
        <div className={classNames("row", styles.comeBack)}>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <Button label="Go to List"/>
          </Link>
        </div>
        { dataLoaded &&
        <div className="row">
          <div className={styles.detailsWrapper}>
            <Avatar alt="Album label" src={data['im:image'][2].label}/>
            <div className={styles.detailsInfoWrapper}>
              <h2 className={styles.title}>{data.title.label}</h2>
              <p>{data['im:artist'].label}</p>

              <div className={styles.detailsInfo}>
                <p>{data.category.attributes.term}</p>
                <p>{data['im:releaseDate'].attributes.label}</p>
                <p>{data.rights.label}</p>
                <p>{data['im:price'].label}</p>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default DetailsRoute;
