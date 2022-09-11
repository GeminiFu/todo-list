import React from 'react'

import styles from './index.css'

const TaskHeader = (props) => {

    return (
        <div className={styles['task-header-wrapper']}>
            <div className={styles['left-wrapper']}>
                <input
                    type="checkbox"
                    checked={props.initTask.completed}
                    onChange={(e) => { props.setTask('completed', e.target.checked) }}
                />
                <input
                    // TODO: required
                    type="text"
                    placeholder='title'
                    value={props.initTask.title}
                    onChange={(e) => { props.setTask('title', e.target.value) }}
                />
            </div>
            <div className={styles['right-wrapper']}>
                <input type="checkbox"
                    checked={props.initTask.important}
                    onChange={(e) => { props.setTask('important', e.target.checked) }}
                />
                <input type="checkbox"
                    checked={props.active}
                    onChange={
                        () => {
                            if (!props.active) {
                                props.setActive(true)
                            }
                        }
                    }
                />
            </div>
        </div>
    )
}

export default TaskHeader