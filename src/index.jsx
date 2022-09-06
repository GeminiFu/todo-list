import React from "react";
import ReactDOM from 'react-dom';

import styles from './index.css'

import Nav from './components/Nav'
import AddTask from "./components/AddTask";


ReactDOM.render(

  <div className={styles['body-wrapper']}>
    <div className={styles['body']}>
      <Nav />
      <AddTask />
    </div>
  </div>,
  document.getElementById('root')
);