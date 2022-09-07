import React from 'react'

import styles from './index.css'

const Task = (props) => {
    const formTask = props.formTask

    return (
        <div className={styles['wrapper']}>

            {/* task header */}
            <div className={styles['task-header-wrapper']}>
                <div className={styles['left-wrapper']}>
                    <input type="checkbox" />
                    <input type="text" placeholder='title' />
                </div>
                <div className={styles['right-wrapper']}>
                    <input type="checkbox" />
                    <input type="checkbox" />
                </div>
            </div>

            <hr className={styles['hr']} />

            {/* task body */}
            <div className={styles['task-body-wrapper']}>
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

            {/* task footer */}
            <div className={styles['task-footer-wrapper']}>
                <button
                    className={styles['cancel-wrapper']}
                    onClick={() => { props.setActive(false) }}
                >X Cancel</button>
                <button
                    className={styles['add-task-wrapper']}
                    onClick={() => { }}
                >+ {formTask.name}</button>
            </div>
        </div>
    )
}

export default Task