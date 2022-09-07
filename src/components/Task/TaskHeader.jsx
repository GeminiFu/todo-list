import React from 'react'

import styles from './TaskHeader.css'

const TaskHeader = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['left-wrapper']}>
        <input type="checkbox" />
        <input type="text" placeholder='title' />
      </div>
      <div className={styles['right-wrapper']}>
        <input type="checkbox" />
        <input type="checkbox" />
      </div>
    </div>
  )
}

export default TaskHeader