import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItemComponent extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
  }
  
  render() {
    const { todo } = this.props;
    return (
      <div className="App-Todo__Item">
        <input type="text" defaultValue={todo.title} placeholder="todo .,," />
      </div>
    );
  }
}
