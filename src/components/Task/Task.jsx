import React from 'react'

import styles from './task.css'
import TaskHeader from './TaskHeader.jsx'
import TaskBody from './TaskBody.jsx'
import TaskFooter from './TaskFooter'

const Task = (props) => {
    return (
        <div className={styles['wrapper']}>
            <TaskHeader />
            <hr className={styles['hr']} />
            <TaskBody />
            <TaskFooter active={props.active} formTask={props.formTask} />
        </div>
    )
}

export default Task