import React from 'react'

import styles from './index.css'

const TaskHeader = (props) => {
    return (
        <div className={styles['task-header-wrapper']}>
            <div className={styles['left-wrapper']}>
                <input
                    type="checkbox"
                    checked={props.temptTask.completed}
                    onChange={
                        (e) => {
                            props.setTemptTask({
                                ...props.temptTask,
                                completed: e.target.checked
                            })
                        }
                    }
                />
                <input
                    type="text"
                    placeholder='title'
                    value={props.temptTask.title}
                    onChange={
                        (e) => {
                            props.setTemptTask({
                                ...props.temptTask,
                                title: e.target.value
                            })
                        }
                    }
                />
            </div>
            <div className={styles['right-wrapper']}>
                <input type="checkbox"
                    checked={props.temptTask.important}
                    onChange={
                        (e) => {
                            props.setTemptTask({
                                ...props.temptTask,
                                important: e.target.checked
                            })
                        }
                    }
                />
                <input type="checkbox" />
            </div>
        </div>
    )
}

export default TaskHeader