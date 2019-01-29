import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItemComponent';

class TodoListComponent extends PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  render = () => {
    const { items } = this.props;
    return (
      <div className="App-Todo__list">
        {items && items.map(item => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </div>
    );
  }
}

export default TodoListComponent;
