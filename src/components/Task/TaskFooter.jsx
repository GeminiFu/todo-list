import React from 'react'

import styles from './TaskFooter.css'

const TaskFooter = () => {
    return (
        <div className={styles['wrapper']}>
            <button className={styles['cancel-wrapper']}>X Cancel</button>
            <button className={styles['add-task-wrapper']}>+ Add Task</button>
        </div>
    )
}

export default TaskFooter