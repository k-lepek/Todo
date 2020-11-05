import React, { Component } from 'react';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { todoState: this.props.todo.state, loading: true };
    }

    async handleChange(todoState) {
        const formData = new FormData();
        formData.append('todoId', this.props.todo.todoId);
        const response = await fetch(`todo?todoId=${this.props.todo.todoId}&todoState=${todoState}`,{
            method: `PUT`,
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
            });
        const data = await response.json();
        this.setState({todoState:data.state})
    }

      render(){
      return ( !this.state.todoState ?
      <tr key={this.props.todo.todoId.toString()}>
      <td>{this.props.todo.todoId}</td>
      <td>{this.props.todo.name}</td>
      <td><input
               type="checkbox"
               checked={this.state.todoState}
               onChange={() => this.handleChange(!this.state.todoState)}
            /></td>
      </tr> : <></>)
   }
}