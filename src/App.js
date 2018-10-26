import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './createTodo';

class App extends Component {
  state = {
    todos : [
      {id: 1, complete:'false', content:'buy milk'},
      {id: 2, complete:'false', content:'play games'},
      {id: 3, complete:'false', content:'play mario'},
      {id: 4, complete:'false', content:'play skyrim'},
      {id: 5, complete:'false', content:'play avatar'},
      {id: 6, complete:'false', content:'play halo'},
      {id: 7, complete:'false', content:'play something'},
      {id: 8, complete:'false', content:'play call of duty'},
      {id: 9, complete:'false', content:'play civ'},
      {id: 10, complete:'false', content:'play games'}
    ]
  }

  completeTodo = (id) => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.complete = 'true'
      }
      return todo
    })
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id= Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App container">

      <h1 className='center blue-text'>
        Todos
      </h1>
      <AddTodo addTodo={this.addTodo}/>
      <Todos completeTodo={this.completeTodo} deleteTodo={this.deleteTodo} todos={this.state.todos}/>

      </div>
    );
  }
}

export default App;
