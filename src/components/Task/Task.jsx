import React, { useState } from 'react'
import useWatchState from '../../hooks/useWatchState'

import styles from './index.css'
import TaskBody from './TaskBody'
import TaskFooter from './TaskFooter'
import TaskHeader from './TaskHeader'

const Task = (props) => {
    const initTask = props.initTask

    const [temptTask, setTemptTask] = useState(initTask)

    // useWatchState('temptTask', temptTask)

    return (
        <div className={styles['wrapper']}>
            <TaskHeader
                temptTask={temptTask}
                setTemptTask={setTemptTask}
            />
            <hr className={styles['hr']} />
            <TaskBody
                temptTask={temptTask}
                setTemptTask={setTemptTask}
            />
            <TaskFooter
                setActive={props.setActive}
                formTask={props.formTask}
                temptTask={temptTask}
            />
        </div>
    )
}

export default Task