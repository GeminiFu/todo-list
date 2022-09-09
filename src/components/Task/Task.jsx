import React, { useState } from 'react'
import useWatchState from '../../hooks/useWatchState'

import styles from './index.css'
import TaskBody from './TaskBody'
import TaskFooter from './TaskFooter'
import TaskHeader from './TaskHeader'

const Task = (props) => {
    const [temptTask, setTemptTask] = useState(props.initTask)

    // useWatchState('temptTask', temptTask)



    return (
        <div className={styles['wrapper']}>
            <TaskHeader
                temptTask={temptTask}
                setTemptTask={setTemptTask}
            />
            {(() => {
                if (props.active) {
                    return (
                        <>
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
                        </>
                    )
                }
            })()}
        </div>
    )
}

export default Task