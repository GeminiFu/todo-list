import React, { useState } from "react";


import styles from './index.css'
import Task from '../Task'

const AddTask = function () {

    // TODO: default false
    const [active, setActive] = useState(true)

    if (active) {
        return <Task
            setActive={setActive}
            formTask={{
                // method: useAddTask,
                name: 'Add Task'
            }}
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