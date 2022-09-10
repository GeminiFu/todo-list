import React, { useState } from 'react'
import useWatchState from '../../hooks/useWatchState'

import styles from './index.css'
import TaskBody from './TaskBody'
import TaskFooter from './TaskFooter'
import TaskHeader from './TaskHeader'

const Task = (props) => {
    const [temptTask, setTemptTask] = useState(props.initTask)
    const [active, setActive] = useState(false)

    function changeTemptTask(key, value) {
        temptTask[key] = value
        setTemptTask({ ...temptTask, })
    }

    // useWatchState('temptTask', temptTask)


    return (
        <div className={styles['wrapper']}>
            <TaskHeader
                // TODO: TaskHeader 
                // active === false
                // 可以直接修改
                // active === true
                // 需按下按鈕才修改
                temptTask={temptTask}
                changeTemptTask={changeTemptTask}
                active={active}
                setActive={setActive}
            />
            {(() => {
                if (active) {
                    return (
                        <>
                            <hr className={styles['hr']} />
                            <TaskBody
                                temptTask={temptTask}
                                setTemptTask={setTemptTask}
                            />
                            <TaskFooter
                                setActive={setActive}
                                formTask={props.formTask}
                                temptTask={temptTask}
                            />
                        </>
                    )
                }
            })()}
        </div>
    )
}

export default Task