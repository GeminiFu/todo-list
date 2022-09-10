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
          {/* TODO: 讓 Nav, AddTask 渲染綁定空集合，不做無謂的渲染 */}
          <Nav />
          <AddTask addTask={taskHook.addTask} />
          <Routes>
            {/* TODO: path="/" 給一個會自動連結到 "/mytask" 的元件 */}
            <Route path="/" element={<MyTask filterTaskList={taskHook.filterTaskList} />} />
            <Route path="/inproccess" element={<InProccess filterTaskList={taskHook.filterTaskList} />} />
            <Route path="/completed" element={<Completed filterTaskList={taskHook.filterTaskList} />} />
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