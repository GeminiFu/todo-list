import React from 'react'

const TodoFilter = props => {
  return (
    <div>
      <input type="checkbox" name="" checked={props.filters.includes('undone')} id="" onClick={() => props.switchFilters('undone')} />
      <span>undone</span>
    </div>
  )
}

export default TodoFilter