import React, { Component } from "react";
import TodoItem from "./TodoItem";
export class Todos extends Component {
  static displayName = Todos.name;

  constructor(props) {
    super(props);
    this.state = { todos: [], loading: true, todoText: '' };
    this.handleTodoTextChange = this.handleTodoTextChange.bind(this);
  }

  componentDidMount() {
    this.getTodosData();
  }

  getTodo(todo) {
    return <TodoItem todo={todo} key={todo.todoId.toString()}/>;
  }

  renderTodos(todos) {
    return (
      <>
        <form onSubmit={(e) => this.handleAcceptForm(e)}>
          <input type="text" name="Todo"  onChange={this.handleTodoTextChange} value={this.state.todoText}/>
          <button type="submit">Add Todo</button>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{todos.map(todo => this.getTodo(todo))}</tbody>
        </table>
      </>
    );
  }

  handleTodoTextChange(event){
    this.setState({todoText: event.target.value})
  }
  
  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTodos(this.state.todos)
    );

    return <div>{contents}</div>;
  }

  async getTodosData() {
    const response = await fetch("Todo");
    const data = await response.json();
    this.setState({ todos: data, loading: false });
  }

  handleAcceptForm(e)
  {
    e.preventDefault();

    if(this.state.todoText !== null && this.state.todoText !== '' )
    this.addTodo(this.state.todoText);
  }

  async addTodo(todoText) {
    const formData = new FormData();
    formData.append("todoId", null);
    formData.append("name", todoText);
    formData.append("state", true);
    const response = await fetch(`todo`, {
      method: `POST`,
      body: JSON.stringify(todoText),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const data = await response.json();
    this.setState(prevState => ({
        todos: [...prevState.todos, data],
        todoText: ''
      }))
  }
}
