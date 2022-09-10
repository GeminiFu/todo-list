import React from 'react'

import styles from './index.css'

const TaskHeader = (props) => {

    return (
        <div className={styles['task-header-wrapper']}>
            <div className={styles['left-wrapper']}>
                <input
                    type="checkbox"
                    checked={props.temptTask.completed}
                    onChange={(e) => { props.changeTemptTask('completed', e.target.checked) }}
                />
                <input
                    // required
                    type="text"
                    placeholder='title'
                    value={props.temptTask.title}
                    onChange={(e) => { props.changeTemptTask('title', e.target.value) }}
                />
            </div>
            <div className={styles['right-wrapper']}>
                <input type="checkbox"
                    checked={props.temptTask.important}
                    onChange={(e) => { props.changeTemptTask('important', e.target.checked) }}
                />
                <input type="checkbox"
                    checked={props.active}
                    onChange={() => { props.setActive(!props.active) }}
                />
            </div>
        </div>
    )
}

export default TaskHeader