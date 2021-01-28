import React, { Component } from 'react';
import '../styles/TodoBox.css';
import PropTypes from 'prop-types'

class TodoBox extends Component {
    constructor(props){
        super(props);
        this.state ={
            todoText: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    //Metodos
    onSubmit(e){
        e.preventDefault();
        this.props.onSubmit(e);
        this.setState({todoText: ''})
    }
    getInputValue(){
        return this.state.todoText;
    }
  render() {
    return (
      <div className="TodoBox">
        <form onSubmit={this.onSubmit}>
        <input 
        type="text" 
        value={this.state.todoText} 
        onChange={(e) => { this.setState({todoText: e.target.value}) }}
        placeholder="Insert Task"
        />
        <input type="submit" value="Add Task"/>
        </form>
      </div>
    );
  }
}

TodoBox.proptypes ={
    onSubmit: PropTypes.func.isRequired
}

export default TodoBox;
