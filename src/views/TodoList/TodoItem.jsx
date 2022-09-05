import React from 'react'

const TodoItem = props => {
  return (
    <div>
      <span>{props.todo.name}</span>
      <input type="checkbox" name="" checked={!props.todo.undone} id={props.todo.id} onClick={e => { props.switchTodoDoneStatus(e.target.id) }} />
      <button id={props.todo.id} onClick={e => { props.deleteTodo(e.target.id) }}>delete</button>
    </div>
  )
}

export default TodoItem