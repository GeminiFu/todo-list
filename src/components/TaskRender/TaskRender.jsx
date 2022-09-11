import React, { useState } from 'react'
import Task from '../Task/Task'
import TaskHeader from '../Task/TaskHeader'

const TaskRender = (props) => {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <Task
        setActive={setActive}
        initTask={props.initTask}
        formTask={{
          method: props.setTask,
          name: 'Update Task'
        }}
      />
    )
  } else {
    return (
      <TaskHeader
        active={false}
        setActive={setActive}
        initTask={props.initTask}
        setTask={props.setTask}
      />
    )
  }
}

export default TaskRender