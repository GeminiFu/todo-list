import React, { useState } from "react";


import styles from './index.css'
import Task from '../Task'
import useWatchState from "../../hooks/useWatchState";

const AddTask = function (props) {
    const initTask = {
        title: '',
        deadline: ['', ''],
        file: '',
        comment: '',
        id: 0,
        important: false,
        completed: false,
    }

    const [active, setActive] = useState(false)

    // useWatchState('active', active)

    if (active) {
        return <Task
            setActive={setActive}
            formTask={{
                method: props.addTask,
                name: 'Add Task'
            }}
            initTask={initTask}
        />
    } else {
        return (
            <button className={styles.wrapper} onClick={() => { setActive(true) }}>
                <p className={styles.text}>+ Add Task</p>
            </button>
        )
    }

}

export default AddTask