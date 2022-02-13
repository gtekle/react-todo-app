import React from "react";

import TodoItem from './TodoItem';

class TodoList extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }
  
  handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
    this.setState({ editing: false })
  }
  }

  render(){
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return(
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.props.setUpdate}
            handleEditing = {this.handleEditing}
            viewMode = {viewMode}
            editMode = {editMode}
            editing = {this.state.editing}
          />
        ))}
      </ul>
    )
  } 
}

export default TodoList;