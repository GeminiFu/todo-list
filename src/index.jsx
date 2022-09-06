import React from "react";
import ReactDOM from 'react-dom';

import styles from './index.css'

import Nav from './components/Nav'

ReactDOM.render(

  <div className={styles['body-wrapper']}>
    <div className={styles['body']}>
      <Nav />
    </div>
  </div>,
  document.getElementById('root')
);