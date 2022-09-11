import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom"

import useTask from "./hooks/useTask";

import basicStyles from './basic.css'
import styles from './index.css'

import Nav from './components/Nav'
import AddTask from "./components/AddTask";
import TaskListRender from "./components/TaskListRender";

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
            <Route path="/" element={<TaskListRender
              renderTaskList={taskHook.renderTaskList}
              filter={''}
              setTask={taskHook.updateTask}
            />} />
            <Route path="/inproccess" element={<TaskListRender
              renderTaskList={taskHook.renderTaskList}
              filter={false}
              setTask={taskHook.updateTask}
            />} />
            <Route path="/completed" element={<TaskListRender
              renderTaskList={taskHook.renderTaskList}
              filter={true}
              setTask={taskHook.updateTask}
            />} />
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