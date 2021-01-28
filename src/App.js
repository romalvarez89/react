import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

import TodoBox from './components/TodoBox'
import TodoList from './components/TodoList'

class App extends Component {
  constructor(){
    super();
    this.state ={
      todoItems: []
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    let todoListValue = this.refs.todobox.getInputValue();
    let newTodoItemsValue = this.state.todoItems.concat(todoListValue)
    this.setState({todoItems: newTodoItemsValue});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List</h1>
        </header>
        <div className="todoListApp">
        <TodoBox ref="todobox" onSubmit={ this.onSubmit}/>
        <TodoList ref="todolist" items={this.state.todoItems}/>
        </div>
      </div>
    );
  }
}

export default App;
