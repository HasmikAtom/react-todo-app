import React from 'react';

const Todos = ({todos, completeTodo, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className='collection-item' key={todo.id} complete={todo.complete}>
          <span onClick = {() => {completeTodo(todo.id)}}>
            {todo.content}
          </span>
          <span className='btn delete' onClick = {() => {deleteTodo(todo.id)}}>Delete task</span>
        </div>
      )
    })
  ) : (
    <p className='center'> You have no todos left</p>
  )
  return (
    <div className='todos collection'>
      {todoList}
    </div>
  )
}

export default Todos
