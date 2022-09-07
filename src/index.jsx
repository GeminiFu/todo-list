import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom"

import useTask from "./hooks/useTask";

import basicStyles from './basic.css'
import styles from './index.css'

import Nav from './components/Nav'
import AddTask from "./components/AddTask";
import MyTask from './components/MyTask';
import InProccess from './components/InProccess'
import Completed from './components/Completed'

function Todo() {
  const taskHook = useTask()

  return (
    <div className={styles['body-wrapper']}>
      <div className={styles['body']}>
        <HashRouter>
          <Nav />
          <AddTask addTask={taskHook.addTask} />
          <Routes>
            <Route path="/mytask" element={<MyTask />} />
            <Route path="/inproccess" element={<InProccess />} />
            <Route path="/completed" element={<Completed />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);