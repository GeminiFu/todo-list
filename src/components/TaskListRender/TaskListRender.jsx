import React from 'react'
import TaskRender from '../TaskRender/TaskRender'

const TaskListRender = (props) => {
  return (
    props.renderTaskList(props.filter).map((task) =>
      < TaskRender
        initTask={task}
        setTask={props.setTask}
      // formTask={{
      //   method: props.addTask,
      //   name: 'Update Task'
      // }
      // }
      />
    )
  )
}

export default TaskListRender