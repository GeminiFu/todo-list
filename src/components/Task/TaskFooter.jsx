import React from 'react'

import styles from './index.css'

const TaskFooter = (props) => {
    const formTask = props.formTask
    console.log('taskFooter', props.temptTask)

    return (
        <div className={styles['task-footer-wrapper']}>
            <button
                className={styles['cancel-wrapper']}
                onClick={() => { props.setActive(false) }}
            >X Cancel</button>
            <button
                className={styles['add-task-wrapper']}
                onClick={() => {
                    formTask.method(props.temptTask)
                    props.setActive(false)
                }}
            >+ {formTask.name}</button>
        </div>)
}

export default TaskFooter