import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './TodoStyle.scss';
import TodoList from './components/TodoListComponent';
import * as thunkAction from './TodoThunk';

export class TodoContainer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
  }

  state = {
    input: '',
  }

  componentDidMount() {
    const { getTodos } = this.props;
    getTodos();
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit = (event) => {
    const { input } = this.state;
    const { addTodo } = this.props;
    addTodo(input);

    event.preventDefault();
    return false;
  }

  render() {
    const { todos } = this.props;
    const { input } = this.state;
    return (
      <div className="App-todo">
        <div className="App-todo__input-container">
          <form onSubmit={this.handleSubmit}>
            <input
              className="App-todo__input"
              type="text"
              defaultValue=""
              onChange={this.handleInputChange}
            />
          </form>
        </div>
        <TodoList items={todos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(thunkAction.addTodo(text)),
  getTodos: () => dispatch(thunkAction.getTodosThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
