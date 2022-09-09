import React from 'react'

import styles from './index.css'

const TaskBody = (props) => {
    return (
        <div className={styles['task-body-wrapper']}>
            <div className={styles['deadline-wrapper']}>
                <label>Deadline</label>
                <input type="date"
                    onChange={
                        (e) => {
                            props.temptTask.deadline[0] = e.target.value

                            props.setTemptTask({
                                ...props.temptTask,
                            })
                        }
                    }
                />
                <input type="time"
                    onChange={
                        (e) => {
                            props.temptTask.deadline[1] = e.target.value

                            props.setTemptTask({
                                ...props.temptTask,
                            })
                        }
                    }
                />
            </div>
            <div className={styles['file-wrapper']}>
                <label>File</label>

                <button className={styles['file-button']}>
                    <label for="label-task-file" className={styles['file-button-label']}>
                        +
                    </label>
                </button>

                <input
                    id="label-task-file"
                    hidden="true" className='task-file'
                    type="file"
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
            <div className={styles['comment-wrapper']}>
                <label>Comment</label>
                <input
                    type="text"
                    placeholder='Type your memo here...'
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
        </div>)
}

export default TaskBody