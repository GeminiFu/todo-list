import React, { useState } from 'react'

const AddTodo = props => {
  const [name, setName] = useState('');

  function formTodo(name) {
    const todo = {
      name,
      id: Math.random(),
      undone: true,
    };
    props.addTodo(todo);
    setName('');
  }

  return (
    <div>
      <input type="text" value={name} id="" onChange={e => { setName(e.target.value) }} />
      <button onClick={() => { formTodo(name) }}>提交名字</button>
    </div>
  )
}

export default AddTodo