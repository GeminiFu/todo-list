import React, { useState } from 'react'
import Task from '../Task'

const MyTask = (props) => {
  console.log('My Task', props.filterTaskList())

  const [active, setActive] = useState(false)




  return (
    props.filterTaskList().map((task) =>
      < Task
        setActive={setActive}
        initTask={task}
        formTask={{
          method: props.addTask,
          name: 'Update Task'
        }
        }
      />
    )
  )
}

export default MyTask