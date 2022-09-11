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
                            props.setTask('deadline', e.target.value, '0')
                        }
                    }
                />
                <input type="time"
                    onChange={
                        (e) => {
                            props.setTask('deadline', e.target.value, '1')
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
                            props.setTask('file', e.target.value)
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
                            console.log(e.target)
                            props.setTask('comment', e.target.value)
                        }
                    }
                />
            </div>
        </div>)
}

export default TaskBody