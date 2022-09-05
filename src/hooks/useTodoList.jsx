import React, { useState, useEffect } from 'react'

const useTodoList = () => {
  const [todos, setTodos] = useState([{
    name: 'test',
    id: Math.random(),
    undone: true,
  }]);

  useEffect(() => {
    console.log('新的 todos 是: ', todos);
    return () => {
      console.log('舊的 todos 是: ', todos);
    };
  }, [todos]);

  // addTodo
  function addTodo(todo) {
    setTodos([
      ...todos,
      todo,
    ]);
  };
  // deleteTodo
  function deleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== parseFloat(id));
    setTodos(newTodos);
  };
  // TODO: switchTodoDoneStatus
  function switchTodoDoneStatus(id) {
    const targetIndex = todos.findIndex(todo => todo.id === parseFloat(id)),
      newTodos = [...todos];

    newTodos[targetIndex].undone = !newTodos[targetIndex].undone;

    setTodos(newTodos);
  }
  // TODO: editTodo
  // TODO: filterTodo
  const [filters, setFilters] = useState([]);

  function switchFilters(filter) {
    let newFilters = [...filters];
    if (filters.includes(filter)) {
      newFilters = filters.filter(filter => filter !== filter);
    } else {
      newFilters.push(filter);
    };

    console.log('old filters is: ', filters);
    setFilters(newFilters);
    console.log('new filters is: ', filters);
  }

  let renderTodos = todos;
  filters.forEach(filter => {
    renderTodos = renderTodos.filter(todo => todo[filter]);
  })
  console.log('renderTodos is: ', renderTodos);

  return ({
    todos: renderTodos,
    addTodo,
    deleteTodo,
    switchTodoDoneStatus,
    filters,
    switchFilters,
  })
}

export default useTodoList