import React from 'react'

import styles from './TaskBody.css'

const TaskBody = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['deadline-wrapper']}>
                <label>Deadline</label>
                <input type="date" />
                <input type="datetime" />
            </div>
            <div className={styles['file-wrapper']}>
                <label>File</label>
                <button>+</button>
            </div>
            <div className={styles['comment-wrapper']}>
                <label>Comment</label>
                <input type="text" placeholder='Tyoe your memo here...' />
            </div>
        </div>
    )
}

export default TaskBody