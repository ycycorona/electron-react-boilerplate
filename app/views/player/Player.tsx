import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Player.css';
import routes from '../../constants/routes.json';

export default function Counter() {
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
    </div>
  );
}
