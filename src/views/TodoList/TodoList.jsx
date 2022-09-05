import React from 'react'

import useTodoList from '../../hooks/useTodoList.jsx'
import TodoFilter from './TodoFilter.jsx'
import TodoItem from './TodoItem.jsx'
import AddTodo from './AddTodo.jsx'

const TodoList = () => {
  const todoList = useTodoList();

  return (
    <div >
      <p className="title">Title</p>
      <p id="subtitle">subtitle</p>
      <TodoFilter filters={todoList.filters} switchFilters={todoList.switchFilters} />
      <div className="form">
        {todoList.todos.map(todo => (
          <TodoItem
            todo={todo}
            deleteTodo={todoList.deleteTodo}
            switchTodoDoneStatus={todoList.switchTodoDoneStatus}
          />
        ))}
      </div>
      <AddTodo addTodo={todoList.addTodo} />
    </div>
  )
}

export default TodoList