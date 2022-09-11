import React from 'react'
import useSetObj from '../../hooks/useSetObj'
import useWatchState from '../../hooks/useWatchState'

import styles from './index.css'
import TaskBody from './TaskBody'
import TaskFooter from './TaskFooter'
import TaskHeader from './TaskHeader'

const Task = (props) => {
    const [temptTask, setTemptTask] = useSetObj(props.initTask)

    useWatchState('temptTask', temptTask)


    return (
        <div className={styles['wrapper']}>
            <TaskHeader
                // TODO: TaskHeader 
                // active === false
                // 可以直接修改
                // active === true
                // 需按下按鈕才修改
                active={true}
                initTask={temptTask}
                setTask={setTemptTask}
            />
            <hr className={styles['hr']} />
            <TaskBody
                temptTask={temptTask}
                setTask={setTemptTask}
            />
            <TaskFooter
                setActive={props.setActive}
                temptTask={temptTask}
                setTask={setTemptTask}
                formTask={props.formTask}
            />
        </div>
    )
}

export default Task